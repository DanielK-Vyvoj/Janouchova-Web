<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
  
    function navigateToEmail() {
      goto('/administrace/email');
    }
  
    function navigateToPhone() {
      goto('/administrace/telefon');
    }
  
    function navigateToIco() {
      goto('/administrace/ico');
    }
    function navigateToAdresa() {
      goto('/administrace/adresa');
    }
  </script>
  
  <div class="flex justify-between space-x-4">
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 class="font-medium text-lg mb-2">Změnit E-mail na webu</h2>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" on:click={navigateToEmail}>Přejít na stránku</button>
    </div>
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 class="font-medium text-lg mb-2">Změnit Telefon na webu</h2>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" on:click={navigateToPhone}>Přejít na stránku</button>
    </div>
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 class="font-medium text-lg mb-2">Změnit IČO na webu</h2>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" on:click={navigateToIco}>Přejít na stránku</button>
    </div>
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 class="font-medium text-lg mb-2">Změnit Adresu na webu</h2>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" on:click={navigateToAdresa}>Přejít na stránku</button>
      </div>
  </div>
  