<template>
  <section id="teachersExercise">
    <h2 class="sectionTitle">Teachers' Exercise</h2>
    <form>
      <label for="nombre">
        Nombre:
        <input id="nombre" type="text" v-model="currentTeacher.nombre" />
      </label>
      <label for="apellido">
        Apellidos:
        <input id="apellido" type="text" v-model="currentTeacher.apellidos" />
      </label>
      <label for="dni">
        DNI:
        <input id="dni" type="text" v-model="currentTeacher.dni" />
      </label>
      <div class="formElement">
        <label for="materia"> Materias asignadas: </label>
        <input id="materia" type="text" v-model="materia" />
        <button @click.prevent="addSubject">Agregar Materia</button>
        <ul>
          <li
            class="materia"
            v-for="(materia, index) in currentTeacher.materiasAsignadas"
            :key="index"
          >
            {{ materia }}
            <button @click.prevent="deleteSubject(index)">Eliminar</button>
          </li>
        </ul>
      </div>
      <label for="documentacion">
        Documentación entregada
        <input
          id="documentacion"
          type="checkbox"
          v-model="currentTeacher.documentacion"
        />
      </label>

      <button @click.prevent="addTeacher">Agregar Profesor</button>
    </form>

    <table>
      <caption>
        Lista de profesores
      </caption>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>DNI</th>
          <th>Materias Asignadas</th>
          <th>Documentación</th>
          <th>Mantenimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="teacher in teachers" :key="teacher.dni">
          <td>{{ teacher.nombre }}</td>
          <td>{{ teacher.apellidos }}</td>
          <td>{{ teacher.dni }}</td>
          <td>
            <span
              v-for="(materia, index) in teacher.materiasAsignadas"
              :key="index"
            >
              {{ materia }}
              <template v-if="index !== teacher.materiasAsignadas.length - 1"
                >,
              </template>
            </span>
          </td>
          <td>{{ teacher.documentacion ? "Si" : "No" }}</td>
          <td>
            <button @click="editTeacher(teacher.id)">Editar</button>
            <button @click="deleteTeacher(teacher.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

interface ITeacher {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  materiasAsignadas: Array<string>;
  documentacion: boolean;
}

let currentTeacher: Ref<ITeacher> = ref({
  id: 0,
  nombre: "",
  apellidos: "",
  dni: "",
  materiasAsignadas: [],
  documentacion: false,
});
let materia: Ref<string> = ref("");

let teachers: Ref<Array<ITeacher>> = ref([]);

const addSubject = () => {
  currentTeacher.value.materiasAsignadas.push(materia.value);
  materia.value = "";
};

const addTeacher = () => {
  const teacherAlreadyAdded = teachers.value.find(
    (t) => t.id == currentTeacher.value.id
  );

  if (teacherAlreadyAdded) {
    teachers.value = teachers.value.map((t) => {
      if (t.id == currentTeacher.value.id) return currentTeacher.value;
      else return t;
    });
  } else {
    teachers.value.push({
      id: Date.now(),
      nombre: currentTeacher.value.nombre,
      apellidos: currentTeacher.value.apellidos,
      dni: currentTeacher.value.dni,
      materiasAsignadas: currentTeacher.value.materiasAsignadas,
      documentacion: currentTeacher.value.documentacion,
    });
  }

  currentTeacher.value = {
    id: 0,
    nombre: "",
    apellidos: "",
    dni: "",
    materiasAsignadas: [],
    documentacion: false,
  };
};

const editTeacher = (id: number): void => {
  const selectedTeacher = teachers.value.find((t) => t.id == id);
  if (selectedTeacher) {
    currentTeacher.value = {
      id: selectedTeacher.id,
      nombre: selectedTeacher.nombre,
      apellidos: selectedTeacher.apellidos,
      dni: selectedTeacher.dni,
      materiasAsignadas: selectedTeacher.materiasAsignadas,
      documentacion: selectedTeacher.documentacion,
    };
  }
};

const deleteTeacher = (id: number): void => {
  teachers.value = teachers.value.filter((t) => t.id != id);
};

const deleteSubject = (index: number): void => {
  currentTeacher.value.materiasAsignadas =
    currentTeacher.value.materiasAsignadas.filter((t, indx) => index != indx);
};
</script>

<style scoped>
#teachersExercise {
  width: 100%;
  background-color: rgb(81, 167, 167);
  padding: 1rem;
}
.sectionTitle {
  text-align: center;
}

form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.materia {
  display: flex;
  gap: 0.5rem;
}

table {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
}

table td,
table th {
  border: solid 1px #000;
}
</style>
