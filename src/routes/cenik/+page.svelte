
<script lang="ts">

  import Header from "../../komponenty/web/Header.svelte";
  import Deti from "../../komponenty/web/Deti.svelte";
  import Karty from "../../komponenty/web/Karty.svelte";

  import { db } from '../../firebase/Firebase';
  import { ref, onValue } from 'firebase/database';

  let products = [];

const cenikRef = ref(db, 'Cenik');
onValue(cenikRef, (snapshot) => {
  const data = snapshot.val();
  products = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
});
 

</script>


  <Header/>
  <Deti/>
  <h1 class="text-6xl font-bold text-center text-black">Ceník</h1>
  
  <table class="table-auto border-collapse w-full mt-8">
    <thead>
      <tr>
        <th class="border-l-4 border-yellow-500 text-left px-4 py-2 font-semibold text-sm uppercase">Název</th>
        <th class="border-l-4 border-yellow-500 text-left px-4 py-2 font-semibold text-sm uppercase">Cena v Kč</th>
      </tr>
    </thead>
    <tbody>
      {#each products as product, i}
    <tr class="{i % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'} hover:bg-pink-300 transition-colors duration-500">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price} Kč</td>
    </tr>
  {/each}
    </tbody>
  </table>
    <Karty/>