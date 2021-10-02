---
home: true
---

<div class="box">
  <h1 class="title">
    Jak můžeme pomoci?
  </h1>

  <p class="description">
    Časté otázky o platformě Herohero. <br> Obsah, Platby, Odběry a jiné.
  </p>

  <section>
    <a href="./guide/getting-started" class="btn">Vstoupit</a>
  </section>
</div>

<style>
  .box {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    min-height: 80vh;
  }
  
  .title {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1.125rem;
  }

  .btn {
    background-color: var(--c-brand);
    border-radius: 8px;
    color: white;
    display: inline-block;
    font-weight: 600;
    font-size: 1.125rem;
    margin: 1.5rem 1.5rem 1.5rem 0;
    min-width: 100%;
    padding: 1rem 1.5rem;
    text-align: center;
  }

  .btn.outiline {
    background-color: transparent;
    border: 1px solid var(--c-brand);
    color: var(--c-brand);
    font-size: 1rem
  }

  .btn:last-child {
    margin-top: 0;
  }

  a.btn:hover {
    text-decoration: none;
  }

  @media (min-width: 576px) {
    .btn {
      min-width: auto;
    }
  }

  @media (min-width: 768px) {
    .title {
      font-size: 3rem;
      max-width: 80%;
    }

    .description {
      font-size: 1.125rem;
      max-width: 80%;
    }
  }

  @media (min-width: 992px) {
    .title {
      max-width: 60%;
    }

    .description {
      max-width: 60%;
    }
  }
</style>
