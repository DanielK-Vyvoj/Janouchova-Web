<script>
      import { onMount } from 'svelte';
      import Header from "../../komponenty/web/Header.svelte";
    import Deti from "../../komponenty/web/Deti.svelte";
    import Karty from "../../komponenty/web/Karty.svelte";

let color = 'white';

let dogShape = [
  [1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0]
];
let dogSquares = dogShape.map(row => row.map(cell => (cell ? 'white' : null)));

let rabbitShape = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0]
];
let rabbitSquares = rabbitShape.map(row => row.map(cell => (cell ? 'white' : null)));

let currentShape = dogShape;
let currentSquares = dogSquares;

function handleColorChange(e) {
  color = e.target.value;
}

function handleSquareClick(rowIndex, colIndex) {
  if (currentShape[rowIndex][colIndex]) {
    currentSquares[rowIndex][colIndex] = color;
  }
}

function toggleShape() {
  if (currentShape === dogShape) {
    currentShape = rabbitShape;
    currentSquares = rabbitSquares;
  } else {
    currentShape = dogShape;
    currentSquares = dogSquares;
  }
}
  
    onMount(() => {
      // Případně zde můžete provést další inicializaci
    });
  </script>
  <style>
    .square {
      width: 30px;
      height: 30px;
      border: 1px solid black;
      display: inline-block;
      cursor: pointer;
      margin: 2px;
    }
    .row {
      display: flex;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
    .btn {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #008CBA;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
    .btn:hover {
      background-color: #006B94;
    }
  </style>


<body  class="bg-fixed bg-no-repeat bg-cover bg-center" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/POZADI-1.gif?alt=media&token=1484df81-b28b-429b-af9a-57f2a3ca7647')">
    <Header/>
    <Deti/>
    <h1 class="text-6xl font-bold text-center text-black">Vymaluj zvířátko</h1>

  <div>
    <label for="color">Vyberte barvu:</label>
    <input type="color" id="color" on:change="{handleColorChange}" />
  </div>
  <div class="container">
    {#each currentSquares as row, rowIndex}
      <div class="row">
        {#each row as square, colIndex}
          {#if square !== null}
            <div
              class="square"
              style="background-color: {square}"
              on:click="{() => handleSquareClick(rowIndex, colIndex)}"
            ></div>
          {:else}
            <div class="square" style="visibility: hidden"></div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
  <div>
    <button on:click={toggleShape} class="btn">{currentShape === dogShape ? 'Zobrazit králíka' : 'Zobrazit psa'}</button>
  </div>
</body>
<Karty/>