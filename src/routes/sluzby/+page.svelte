
<script lang="ts">

    import Header from "../../komponenty/web/Header.svelte";
    import Deti from "../../komponenty/web/Deti.svelte";
    import Karty from "../../komponenty/web/Karty.svelte";
  
    import { db } from '../../firebase/Firebase';
    import { ref, onValue } from 'firebase/database';
  
    let services = [];
  
  const cenikRef = ref(db, 'Sluzby');
  onValue(cenikRef, (snapshot) => {
    const data = snapshot.val();
    services = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
  });
   
  
  </script>
  
  <body  class="bg-fixed bg-no-repeat bg-cover bg-center" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/POZADI-1.gif?alt=media&token=1484df81-b28b-429b-af9a-57f2a3ca7647')">
    <Header/>
    <Deti/>
    <h1 class="text-6xl font-bold text-center text-black">Služby</h1>
    
    <table class="table-auto border-collapse w-full mt-8">
      <thead>
        <tr>
          <th class="border-l-4 border-yellow-500 px-4 py-2 font-semibold text-sm uppercase text-center">Název</th>
        </tr>
      </thead>
      <tbody>
        {#each services as service, i}
      <tr class="{i % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'} hover:bg-pink-300 transition-colors duration-500">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.name}</td>
      </tr>
    {/each}
      </tbody>
    </table>
      </body>
      <Karty/>