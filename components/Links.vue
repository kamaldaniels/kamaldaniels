<template>
  <div class="links">
    <div class="links__wrapper content">
      <img
        src="~/assets/images/gummy-app-development.svg"
        alt="App development"
      />
      <h2>Here are some links to my stuff</h2>
      <div class="links__items">
        <a href="https://github.com/kamaldaniels">
          <img src="~/assets/images/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/kamal-daniels-52828718/">
          <img src="~/assets/images/linkedin.svg" alt="Linkedin" />
        </a>
        <a href="https://soundcloud.com/kamaldaniels">
          <img src="~/assets/images/soundcloud.svg" alt="Soundcloud" />
        </a>
        <a href="https://www.mixcloud.com/kamaldaniels/">
          <img src="~/assets/images/mixcloud.svg" alt="Mixcloud" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.links {
  &__wrapper {
    background-color: $primary;
    background: linear-gradient(
      160deg,
      $secondary-light 0%,
      $secondary-dark 100%
    );
    padding: 6rem 2rem;
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    margin: 4rem 0;
  }

  img {
    max-width: 80%;
    max-height: 22rem;
  }

  &__items {
    max-width: 80rem;
    margin: 2rem auto;
    display: grid;
    grid-template: repeat(3, auto) / auto;
    grid-gap: 4rem;

    @media (min-width: $tablet) {
      grid-template: auto / repeat(4, auto);
      grid-gap: 3rem;
    }

    a {
      width: 100%;
      margin: auto;
    }

    img {
      max-width: 16rem;
      max-height: 6rem;
      margin: auto;
    }
  }
}
</style>
