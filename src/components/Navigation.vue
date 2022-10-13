<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <router-link :to="{name: 'catalogue'}">Mon Catalogue</router-link>
          </a>

          
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <router-link :to="{name: 'clients'}">Mes clients / prospects</router-link>
            
          </a>

        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <router-link :to="{name: 'historique'}">Mon historique</router-link>
          </a>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="navbar-item">
              <img src="./../assets/cart.png">
              <p>Panier (0)</p>
            </a>
            <a class="navbar-item">
              <img src="./../assets/logout.png" >
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

  
<script>
export default {
  name: 'NavigationComponent'
}
</script>
  
<style scoped>
p{
  color: white;
}

a:link, a:visited {
    color: white;
    font-size: 1.1em;
    text-decoration: none;
    font-family: var(--title-font);
  }

</style>