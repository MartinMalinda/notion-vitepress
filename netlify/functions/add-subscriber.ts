import { jsonHandler, setupBase } from './setup-base';
import validate from 'deep-email-validator';

const base = setupBase();
const table = base.table('Email subscribers');

const handler = jsonHandler('POST', async (event, inputData) => {
  const email = inputData.email as string | undefined;
  console.log('add subsriber');
  const { valid } = await validate(email || '');

  if (!valid) {
    return {
      statusCode: 400,
      body: {
        message: 'This email address does not seem to be valid. Please check the format and try again.'
      }
    };
  }

  //
  // Email valid => add record to Airtable
  //

  try {
    // https://support.airtable.com/hc/en-us/articles/360040113434-Using-logical-operators-to-compare-field-values
    const [existingRecord] = await table.select({ filterByFormula: `Email = "${email}"` }).all();

    if (existingRecord) {
      return {
        statusCode: 400,
        body: {
          message: 'This email address is already on the list'
        }
      };
    }

    console.log('selected');

    await table.create({
      Email: email
    });

    console.log('created');

    // All good, send a success response
    return { statusCode: 200, body: {} };
  } catch (e) {
    // Connection to Airtable has failed. Airtable might be down or there's a different issue. Notify the end user.
    console.error(e);
    // You could also send this error to some error reporting service (Sentry and so on)

    return {
      statusCode: 500,
      body: { message: 'Something went wrong' }
    };
  }
});

export { handler };
