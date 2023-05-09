<template>
  <h1>Factura Exercise</h1>
  <form>
    <ul>
      <li class="formItem">
        <label for="product">Product </label>
        <select id="product" v-model="currentProductName">
          <option
            v-for="product in products"
            :value="product.nombre"
            :key="product.nombre"
          >
            {{ product.nombre }}
          </option>
        </select>

        <button @click.prevent="addProduct">Agregar</button>
      </li>
      <li>
        <table>
          <thead>
            <tr>
              <th>Nro.</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Impuesto</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(product, index) in selectedProducts"
              :key="product.nombre"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ product.nombre }}</td>
              <td>{{ product.precio }}</td>
              <td>{{ product.impuesto }} %</td>
            </tr>
            <tr v-if="selectedProducts.length > 0">
              <td></td>
              <td></td>
              <td>SUBTOTAL:</td>
              <td>L. {{ subtotal }}</td>
            </tr>
            <tr v-if="selectedProducts.length > 0">
              <td></td>
              <td></td>
              <td>ISV:</td>
              <td>L. {{ ISV }}</td>
            </tr>
            <tr v-if="selectedProducts.length > 0">
              <td></td>
              <td></td>
              <td>TOTAL:</td>
              <td>L. {{ total }}</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </form>
</template>

<script setup lang="ts">
import { ref, Ref, computed } from "vue";

interface IProduct {
  nombre: string;
  precio: number;
  impuesto: number;
}

let products = ref([
  {
    nombre: "iPhone 13",
    precio: 999,
    impuesto: 18,
  },
  {
    nombre: "Samsung Galaxy S21",
    precio: 799,
    impuesto: 15,
  },
  {
    nombre: "MacBook Air",
    precio: 1299,
    impuesto: 18,
  },
  {
    nombre: "Dell XPS 13",
    precio: 1099,
    impuesto: 18,
  },
  {
    nombre: "Sony WH-1000XM4",
    precio: 349,
    impuesto: 15,
  },
]);

let selectedProducts: Ref<Array<IProduct>> = ref([]);
let currentProductName = ref("");

const subtotal = computed(() => {
  let subtotal = 0;
  selectedProducts.value.forEach((prod) => {
    subtotal += prod.precio;
  });

  return subtotal;
});

const ISV = computed(() => {
  let isv = 0;
  selectedProducts.value.forEach((prod) => {
    isv += prod.precio * (prod.impuesto / 100);
  });

  return isv;
});

const total = computed(() => subtotal.value + ISV.value);
//FUNCIONES

let addProduct = () => {
  const selectedProduct = products.value.find(
    (pr) => pr.nombre == currentProductName.value
  );

  if (selectedProduct != null) selectedProducts.value.push(selectedProduct);
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.formItem {
  display: flex;
  gap: 0.5rem;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  font-family: Arial, sans-serif;
}

table thead {
  background-color: #222;
  color: #fff;
}

table thead th {
  padding: 15px;
  text-align: left;
  font-size: 1.1em;
}

table tbody tr:nth-child(even) {
  background-color: #f8f8f8;
}

table tbody tr:hover {
  background-color: #f5f5f5;
}

table tbody td {
  padding: 15px;
  font-size: 1em;
  border-bottom: 1px solid #ddd;
}

table tbody td:last-child {
  text-align: right;
}
</style>
