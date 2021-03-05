<template>
  <div class="intro">
    <div class="intro__wrapper content">
      <p>Hi 👋</p>
      <h1>My name's Kamal Daniels and this is my website.</h1>
      <img src="~/assets/images/gummy-programming.svg" alt="Programming" />
      <p class="subtitle">
        I'm currently working at
        <a href="https://findothers.com">Find Others</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.intro {
  &__wrapper {
    background-color: $primary;
    background: linear-gradient(160deg, $primary-light 0%, $primary-dark 100%);
    padding: 6rem 2rem;
    text-align: center;
  }

  h1,
  p {
    font-size: 3rem;
    font-family: $font1;
    font-weight: 600;

    @media (min-width: $phone) {
      font-size: 4rem;
    }
  }

  p {
    margin-bottom: 2rem;
  }

  .subtitle {
    font-size: 2.5rem;
  }

  img {
    max-width: 80%;
    max-height: 30rem;
    margin: 6rem 0;
  }
}
</style>
