<script lang="ts">
    import {
      Modal,
      ModalBody,
      ModalFooter,
      ModalHeader,
      Button,
    } from 'carbon-components-svelte';
    import "carbon-components-svelte/css/white.css";
  
    let showModal = false;
  
    function toggleModal() {
      showModal = !showModal;
    }
  </script>
  
  <div class="flex justify-center items-center h-screen">
    <div class="space-x-4">
      <Button on:click={toggleModal}>Button 1</Button>
      <Button on:click={toggleModal}>Button 2</Button>
      <Button on:click={toggleModal}>Button 3</Button>
      <Button on:click={toggleModal}>Button 4</Button>
      <Button on:click={toggleModal}>Button 5</Button>
    </div>
  
    <Modal let:isOpen={showModal}>
      <ModalHeader>Modal</ModalHeader>
      <ModalBody>
        <textarea class="w-full h-24 border border-gray-300 p-2 rounded-lg" placeholder="Enter some text"></textarea>
      </ModalBody>
      <ModalFooter>
        <Button kind="primary" on:click={toggleModal}>Close</Button>
      </ModalFooter>
    </Modal>
  </div>
  
  <style>
    /* Styles for the modal */
    .bx--modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .bx--modal-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  </style>
  