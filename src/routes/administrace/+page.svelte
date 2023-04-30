<script lang="ts">
    import { onMount } from 'svelte';
    import { createPopper } from '@popperjs/core';
    
    let showModal = false;
    let popperInstance;
  
    function toggleModal() {
      showModal = !showModal;
      if (showModal) {
        popperInstance = createPopper(
          $refs.trigger,
          $refs.modal,
          {
            placement: 'bottom',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 10],
                },
              },
            ],
          }
        );
      } else {
        popperInstance.destroy();
      }
    }
  
    onMount(() => {
      // Initialize Popper.js on modal and trigger refs
      popperInstance = createPopper(
        $refs.trigger,
        $refs.modal,
        {
          placement: 'bottom',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10],
              },
            },
          ],
        }
      );
    });
  </script>
  
  <div class="flex justify-center items-center h-screen">
    <div class="space-x-4">
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" on:click={toggleModal}>
        Button 1
      </button>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" on:click={toggleModal}>
        Button 2
      </button>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" on:click={toggleModal}>
        Button 3
      </button>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" on:click={toggleModal}>
        Button 4
      </button>
    </div>
  
    {#if showModal}
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="fixed top-0 left-0 flex justify-center items-center w-full h-full z-50">
        <div class="bg-white rounded-lg shadow-lg p-4" ref:modal>
          <h2 class="text-lg font-bold mb-4">Modal</h2>
          <textarea class="w-full h-24 border border-gray-300 p-2 rounded-lg" placeholder="Enter some text"></textarea>
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    /* Styles for the modal */
    [data-popper-placement^="bottom"] > .popper,
    [data-popper-placement^="bottom"] > .tooltip {
      margin-top: 10px;
    }
  </style>
  