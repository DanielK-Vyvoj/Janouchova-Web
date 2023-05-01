<script lang="ts">
    import { onMount } from 'svelte';
    import { getAuth, type User } from 'firebase/auth';
    import { app } from '../../firebase/Firebase';
    import { goto } from '$app/navigation';
    import NavigaceMenu from '../../komponenty/administrace/NavigaceMenu.svelte';
  
    // Deklarace proměnných
    const auth = getAuth(app);
    let user: User | null = null;
    let showModal = false;
  
    // Funkce, která se spustí při načtení stránky
    onMount(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          user = authUser;
        } else {
          goto('/administrace/prihlaseni');
        }
      });
      return () => unsubscribe();
    });
  
    // Otevření a zavření modálního okna pro editaci profilu
    const handleOpenModal = () => {
      showModal = true;
    };
  
    const handleCloseModal = () => {
      showModal = false;
    };
  </script>
  
  <div class="flex h-screen">
    <NavigaceMenu {user} />
  
    <div class="flex-1 p-10">
      <slot />
    </div>
  </div>