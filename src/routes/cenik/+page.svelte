<script>
  import { db } from '../../firebase/Firebase';
  import { ref, onValue } from 'firebase/database';
  import { onMount } from 'svelte';

  export let data = [];

  onMount(() => {
    const dbRef = ref(db, 'tabulka');
  
    onValue(dbRef, (snapshot) => {
      const obj = snapshot.val();
      data = obj ? Object.entries(obj).map(([key, value]) => ({ key, ...value })) : [];
    });
  });
</script>

<table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-50">
    <tr>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Název
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Cena (v Kč)
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
    {#if data.length === 0}
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" colspan="2">Žádné položky nenalezeny.</td>
      </tr>
    {:else}
      {#each data as { key, nazev, cena }}
        <tr :key={key} class="transition-all duration-200 hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{nazev}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cena} Kč</td>
        </tr>
      {/each}
    {/if}
  </tbody>
</table>
