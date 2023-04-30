<style>

    main {
      height: 100vh;
    }
  
    .button-separator {
      height: 1px;
      background-color: #dcdcdc;
      margin: 8px 0;
    }
  
    button {
      margin-bottom: 8px;
    }
  </style>
  
  <script lang="ts">
    import { Button, Modal } from "carbon-components-svelte";
  
    const buttons = [
      { label: "Upravit O nás", modalContent: "Upravit O nás" },
      { label: "Upravit Aktuality", modalContent: "Upravit Aktuality" },
      { label: "Upravit Ordinační dobu", modalContent: "Upravit Ordinační dobu" },
      { label: "Upravit Kontakt", modalContent: "Upravit Kontak" },
      { label: "Upravit Adresu", modalContent: "Upravit Adresu" },
      { label: "Upravit Služby", modalContent: "Upravit Služby" },
      { label: "Upravit Ceník", modalContent: "Upravit Ceník" },
    ];
  
    let currentModalContent = "";
    let currentModalOpen = false;
  
    function openModal(modalContent: string) {
      currentModalContent = modalContent;
      currentModalOpen = true;
    }
  
    function closeModal() {
      currentModalContent = "";
      currentModalOpen = false;
    }
  </script>
  
  <main class="flex flex-col items-center justify-center">
    {#each buttons as button, index}
      <Button class="mb-8" on:click={() => openModal(button.modalContent)}>
        {button.label}
      </Button>
      {#if index !== buttons.length - 1}
        <div class="button-separator"></div>
      {/if}
    {/each}
  
    <Modal bind:open={currentModalOpen} on:close={closeModal}>
      <h3 class="mb-4">{currentModalContent}</h3>
      <Button on:click={closeModal}>Zavřít</Button>
    </Modal>
  </main>
  