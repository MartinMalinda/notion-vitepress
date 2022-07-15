
import Airtable from "airtable";
import { Handler } from '@netlify/functions';
import { Event } from "@netlify/functions/dist/function/event";

const { AIRTABLE_KEY, AIRTABLE_BASE_ID } = process.env;

export const setupBase = () => new Airtable({
  apiKey: AIRTABLE_KEY
})
  .base(AIRTABLE_BASE_ID as string);



type JSONHandlerCallback = (event: Event, data: Record<string, any>) => Promise<{
  statusCode: number, body: Record<string, any>
}>;
export const jsonHandler = (method: 'POST' | 'GET' | 'PUT' | 'PATCH', cb: JSONHandlerCallback): Handler => {
  return async (event) => {
    if (event.httpMethod !== method) {
      return { statusCode: 405 };
    }

    let inputData: Record<string, any>;
    try {
      inputData = JSON.parse(event.body || '{}');
    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Could not parse JSON input' })
      };
    }

    const { statusCode, body } = await cb(event, inputData);
    return { statusCode, body: JSON.stringify(body) };
  };
};
