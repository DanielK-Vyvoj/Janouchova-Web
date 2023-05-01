<script>
    import { getDatabase, ref, onValue, push, update, remove } from 'firebase/database';
    import { onMount } from 'svelte';
    import Swal from 'sweetalert2';
  
    let productName = '';
    let price = '';
    let products = [];
    let isLoaded = false;
    let editProduct = null;
  
    onMount(() => {
      const dbRef = ref(getDatabase(), 'Cenik');
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          products = Object.keys(data).map((key) => {
            return {
              id: key,
              name: data[key].name,
              price: data[key].price
            };
          });
        }
        isLoaded = true;
      });
    });
  
    async function addProduct() {
      if (!productName || !price) {
        Swal.fire('Chyba!', 'Název produktu a cena jsou povinné údaje.', 'error');
        return;
      }
  
      const dbRef = ref(getDatabase(), 'Cenik');
      const newProductRef = push(dbRef);
      await update(newProductRef, { name: productName, price: price });
  
      Swal.fire('Úspěch!', 'Produkt byl úspěšně přidán do ceníku.', 'success');
      productName = '';
      price = '';
    }
  
    async function saveProduct() {
      if (!productName || !price) {
        Swal.fire('Chyba!', 'Název produktu a cena jsou povinné údaje.', 'error');
        return;
      }
  
      const dbRef = ref(getDatabase(), `Cenik/${editProduct.id}`);
      await update(dbRef, { name: productName, price: price });
  
      Swal.fire('Úspěch!', 'Produkt byl úspěšně upraven.', 'success');
      productName = '';
      price = '';
      editProduct = null;
    }
  
    async function deleteProduct(product) {
      const result = await Swal.fire({
        title: 'Opravdu chcete smazat tento produkt?',
        text: `${product.name} - ${product.price} Kč`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ano, smazat',
        cancelButtonText: 'Zrušit'
      });
  
      if (result.isConfirmed) {
        const dbRef = ref(getDatabase(), `Cenik/${product.id}`);
        await remove(dbRef);
  
        Swal.fire('Úspěch!', 'Produkt byl úspěšně smazán z ceníku.', 'success');
      }
    }
  </script>
  
  
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-medium text-gray-800 mb-4 text-center">Ceník Služeb</h2>
  
    <div class="bg-white rounded-lg shadow-lg mb-8">
      <div class="p-4">
        {#if editProduct}
          <h3 class="text-lg font-medium text-gray-800 mb-4">Upravit produkt</h3>
  
          <label for="product" class="block font-medium text-gray-700">Název produktu:</label>
          <input
            id="product"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
            type="text"
            bind:value={productName}
          />
  
          <label for="price" class="block font-medium text-gray-700">Cena v Kč:</label>
          <input
            id="price"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
            type="number"
            bind:value={price}
          />
  
          <div class="flex justify-end">
            <button
              type="button"
              class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm mr-2"
              on:click={saveProduct}
            >
              Uložit změny
            </button>
            <button
              type="button"
              class="bg-gray-400 text-white px-3 py-2 rounded-md shadow-sm"
              on:click={() => {editProduct = null}}
            >
              Zrušit
            </button>
          </div>
        {:else}
          <h3 class="text-lg font-medium text-gray-800 mb-4">Přidat produkt</h3>
  
          <label for="product" class="block font-medium text-gray-700">Název produktu:</label>
          <input
            id="product"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
            type="text"
            bind:value={productName}
          />
  
          <label for="price" class="block font-medium text-gray-700">Cena v Kč:</label>
          <input
            id="price"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
            type="number"
            bind:value={price}
          />
  
          <button
            type="button"
            class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm"
            on:click={addProduct}
          >
          Přidat produkt
        </button>
      {/if}
    </div>
      </div>
    {#if isLoaded}
    <table class="w-full table-fixed">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2 text-left font-medium text-gray-700">Název produktu</th>
          <th class="w-1/4 px-4 py-2 text-left font-medium text-gray-700">Cena v Kč</th>
          <th class="w-1/4 px-4 py-2 text-center font-medium text-gray-700">Akce</th>
        </tr>
      </thead>
      <tbody>
        {#each products as product (product.id)}
        <tr>
            <td class="px-4 py-2 text-gray-800">{product.name}</td>
            <td class="px-4 py-2 text-gray-800">{product.price} Kč</td>
            <td class="px-4 py-2 text-center flex items-center">
                <button
                  type="button"
                  class="bg-gray-400 text-white px-3 py-2 rounded-md shadow-sm mr-2"
                  on:click={() => {
                    editProduct = product;
                    productName = product.name;
                    price = product.price;
                  }}
                >
                  Upravit
                </button>
                <button
                  type="button"
                  class="bg-red-500 text-white px-3 py-2 rounded-md shadow-sm"
                  on:click={() => {deleteProduct(product)}}
                >
                  Smazat
                </button>
              </td>
          </tr>
          
        {/each}
      </tbody>
    </table>
{:else}
<p>Nacitani...</p>
{/if}
</div>