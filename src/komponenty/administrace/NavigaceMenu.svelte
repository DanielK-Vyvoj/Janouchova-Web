<script lang="ts">
    import type { User } from 'firebase/auth';
    import { getAuth } from 'firebase/auth';
    import { app } from '../../firebase/Firebase';
    import { goto } from '$app/navigation';
  
    export let user: User | null;
  
    const auth = getAuth(app);
  
    const handleLogout = async () => {
      try {
        await auth.signOut();
        goto('/prihlaseni');
      } catch (error) {
        console.log(error);
      }
    };
  </script>
  
  {#if user}
    <div class="flex h-screen bg-gray-100">
      <div class="hidden w-64 bg-white border-r md:block">
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-800">Menu</h2>
          <p class="mt-3 text-gray-600">Vítejte {user.email}</p>
          <button
            class="block px-4 py-2 mt-2 text-sm font-semibold bg-gray-200 rounded-lg hover:bg-gray-300"
            on:click={handleLogout}
          >
            Odhlásit se
          </button>
        </div>
        <nav class="flex-grow pb-4 pr-4 pl-6">
          <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-gray-200 rounded-lg hover:bg-gray-300" href="/administrace">Admninistrační část</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300" href="/administrace/aktuality">Upravit Aktuality</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300" href="/administrace/ordinace-doba">Upravit Ordinační dobu</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300" href="/administrace/onas">Upravit O nás</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300" href="/administrace/cenik">Upravit Ceník</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300" href="/administrace/kontakt">Upravit Kontakt</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300" href="/administrace/adresa">Upravit Adresu</a>
          <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300" href="/administrace/sluzby">Upravit Služby</a>
        </nav>
      </div>
    </div>
  {:else}
    <p>Přihlaste se, aby viděli dashboard.</p>
  {/if}
  