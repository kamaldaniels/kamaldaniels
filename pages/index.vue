<template>
  <div class="container">
    <Intro />
    <div class="links">
      <a
        href="https://github.com/kamaldaniels"
        target="_blank"
        rel="noopener noreferrer"
        class="button"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template: repeat(3, 1fr) / 1fr;
  text-align: center;
  min-height: 100vh;
  align-items: center;
}

.title {
  font-family: $font1;
  font-weight: 600;
  font-size: 5rem;
  color: $text;
  letter-spacing: 1px;
}

.button {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button:hover {
  color: #fff;
  background-color: #3b8070;
}
</style>
