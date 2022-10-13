<template>
    <div class="content">

        <div>
  
          <h1 class="title box">Mes clients / prospects</h1>

        </div>

        <div class="control">
          <input class="input is-normal" type="text" placeholder="Rechercher par un contact..."> 
        </div>

        <table class="table is-bordered is-mobile box">
        <thead class="is-mobile">
          <tr>
            <th class="is-primary"><abbr>ID</abbr></th>
            <th class="is-primary"><abbr>Nom</abbr></th>
            <th class="is-primary"><abbr>Prénom</abbr></th>
            <th class="is-primary"><abbr>Adresse</abbr></th>
            <th class="is-primary"><abbr>Ville</abbr></th>
            <th class="is-primary"><abbr>CP</abbr></th>
            <th class="is-primary"><abbr>Telephone</abbr></th>
            <th class="is-primary"><abbr>Email</abbr></th>
          </tr>
        </thead>
        <tbody class="is-mobile">
          <tr :key="index" v-for="(clients, index) in clients">
            <th>{{clients.id}}</th>
            <td>{{clients.nom}}</td>
            <td>{{clients.prenom}}</td>
            <td>{{clients.adresse}}</td>
            <td>{{clients.ville}}</td>
            <td>{{clients.cp}}</td>
            <td>{{clients.telephone}}</td>
            <td>{{clients.email}}</td>
          </tr>
        </tbody>
      </table>
        
    </div> 
  
  </template>
      
  <script>

  export default {
    name: "ClientsComponent",
    components: { }
  }
  </script>
  
  <style scoped>

input{
  width: 30%;
  margin-left: 3%;
}

.content table {
width: 95%;
margin-top: 1%;
margin-left: 3%;
}


  </style>