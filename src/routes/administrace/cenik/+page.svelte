<script>
    import { getDatabase, ref, push } from 'firebase/database';
    
    let nazev = '';
    let cena = '';
    
    const db = getDatabase();
    const dbRef = ref(db, 'tabulka');
    
    async function pridejZaznam() {
      await push(dbRef, { nazev, cena });
    
      nazev = '';
      cena = '';
    }
  </script>
  
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-medium text-gray-700 mb-4">Přidat záznam</h2>
  
    <form on:submit|preventDefault={pridejZaznam}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="text-gray-700 font-medium mb-2 block" for="nazev">
            Název
          </label>
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" id="nazev" name="nazev" placeholder="Název" bind:value={nazev} required>
        </div>
        <div>
          <label class="text-gray-700 font-medium mb-2 block" for="cena">
            Cena (v Kč)
          </label>
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="number" id="cena" name="cena" placeholder="Cena" min="0" bind:value={cena} required>
        </div>
      </div>
  
      <div class="mt-4">
        <button type="submit" class="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Přidat záznam
        </button>
      </div>
    </form>
  </div>
  