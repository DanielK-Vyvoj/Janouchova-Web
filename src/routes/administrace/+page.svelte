<script lang="ts">
    import { Button } from "carbon-components-svelte";
  
    const buttons = [
      { label: "Button 1" },
      { label: "Button 2" },
      { label: "Button 3" },
      { label: "Button 4" },
      { label: "Button 5" },
    ];
  </script>
  
  <main class="flex flex-col items-center justify-center">
    {#each buttons as button, index}
      <Button class="mb-8">{button.label}</Button>
      {#if index !== buttons.length - 1}
        <div class="button-separator"></div>
      {/if}
    {/each}
  </main>

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
  
  