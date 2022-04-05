<template>
  <div class="container">
    <div v-for="admins in adminfields" v-bind:key="admins._id">
      <div v-if="admins.email == user.data.email">
        <div class="separator mt-5 mb-5">Admin Panel</div>
        <div
          v-for="(option, index) in options"
          v-bind:key="index"
          class="section mb-5 card"
        >
          <img :src="option.image" class="mt-4 mb-4 optionimage" />
          <div class="card-footer">
            <router-link :to="option.path" style="text-decoration:none"
              ><h4 class="text-center pt-2">{{ option.name }}</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-for="admins in adminfields" :key="admins._id">
      <div v-if="admins.email == 'donat@gmail.com'">
        <div class="section mb-5 card">
          <img
            src="https://www.svgrepo.com/show/372791/administrator.svg"
            class="mt-4 mb-4 optionimage"
          />
          <div class="card-footer">
            <router-link to="/admin" style="text-decoration:none"
              ><h4 class="text-center pt-2">Admins</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Adminpanel",
  data() {
    return {
      options: [
        {
          name: "Rezervimet",
          image: "https://www.svgrepo.com/show/101871/tickets.svg",
          path: "rezervimet",
        },
        {
          name: "Mesazhet",
          image: "https://www.svgrepo.com/show/70038/message.svg",
          path: "messages",
        },
        {
          name: "Shto librin",
          image: "https://www.svgrepo.com/show/21145/book.svg",
          path: "dashboard",
        },
        {
          name: "Kategoritë",
          image: "https://www.svgrepo.com/show/333787/category-alt.svg",
          path: "category",
        },
        {
          name: "Posta",
          image: "https://www.svgrepo.com/show/71332/post.svg",
          path: "posta",
        },
        {
          name: "Thëniet",
          image: "https://www.svgrepo.com/show/389367/quote.svg",
          path: "quotes",
        },
      ],
      adminfields: {},
    };
  },
  created() {
    axios
      .get(`http://localhost:4000/admin`)

      .then((response) => {
        this.adminfields = response.data.filter(
          (x) => x.email == this.user.data.email
        );
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
};
</script>
