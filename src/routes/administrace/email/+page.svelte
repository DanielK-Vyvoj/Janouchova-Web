<script lang="ts">
  import { getDatabase, ref, update, get } from 'firebase/database';
  import { onMount } from 'svelte';
  import Swal from 'sweetalert2';

  let email = '';
  let newEmail = '';
  let isLoaded = false;

  onMount(async () => {
    // Získání emailu
    const dbRef = ref(getDatabase(), 'Texty/Kontakt/Email');

    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      email = snapshot.val().text;
      isLoaded = true;
    }
  });

  async function updateEmail() {
    // Aktualizace emailu v databázi
    const dbRef = ref(getDatabase(), 'Texty/Kontakt/Email');
    const updateData = { text: newEmail };
    await update(dbRef, updateData);

    // Zobrazení notifikace po úspěšném uložení dat
    Swal.fire('Úspěšně uloženo!', '', 'success');
  }
</script>

<div class="max-w-md mx-auto">
  <label for="text" class="text-lg text-center block font-medium text-gray-700">Dosavadní email</label>
  {#if isLoaded}
    <p class="text-blue-500 text-base text-center">{email}</p>
  {/if}

  <label for="newEmail" class="block font-medium text-gray-700">Nový email:</label>
  <input
    type="email"
    id="newEmail"
    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
    bind:value={newEmail}
  />

  <button
    type="button"
    class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm"
    on:click={updateEmail}
  >
    Aktualizovat email
  </button>
</div>
