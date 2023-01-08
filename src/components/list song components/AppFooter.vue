<script>
import { store } from '../../store.js';

export default {
    name: "AppFooter",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="ctn_link">
        <!-- div contenente i link per accedere alle info sull'azienda, sulla community, link utili e i collegamenti ai social  -->
        <div class="menu">
            <div class="link_vari">
                <div class="link_azienda">
                    <h5>Azienda</h5>
                    <ul>
                        <li v-for="(elem, index) in store.azienda" :key="index">
                            <a href="#">{{ elem }}</a>
                        </li>
                    </ul>
                </div>

                <div class="link_community">
                    <h5>Community</h5>
                    <li v-for="(elem, index) in store.community" :key="index">
                        <a href="#">{{ elem }}</a>
                    </li>
                </div>

                <div class="link_utili">
                    <h5>Link utili</h5>
                    <li v-for="(elem, index) in store.linkUtili" :key="index">
                        <a href="#">{{ elem }}</a>
                    </li>
                </div>
            </div>

            <div class="link_social">
                <div class="icon_social">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </a>
                </div>
                <div class="icon_social">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </a>
                </div>
                <div class="icon_social">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-square-facebook" />
                    </a>
                </div>
            </div>
        </div>
        <!-- div contenente i link per accedere alle info sulla privacy e sui cookie -->
        <div class="bottom_footer">
            <div class="link_info">
                <ul>
                    <li v-for="(elem, index) in store.info" :key="index">
                        <a href="#">{{ elem }}</a>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                <span>&#169; 2023 Spotify AB</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.ctn_link {
    width: 100%;
    margin-top: 60px;
}

// grafica dei menu azienda, community, utili e social
.menu {
    padding-bottom: 30px;
    border-bottom: solid 1px #313131;
    @include between();
    align-items: flex-start;

    .link_vari {
        @include start();
        gap: 50px;

        .link_azienda,
        .link_community,
        .link_utili {
            h5 {
                color: $primaryColor;
                font-size: 16px;
                margin-bottom: 10px;
            }

            li {
                list-style: none;
                margin-bottom: 5px;

                a {
                    color: $secondaryColor;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;

                    &:hover {
                        text-decoration: underline;
                        color: $primaryColor;
                    }
                }
            }
        }
    }

    .link_social {

        @include end();
        gap: 20px;

        .icon_social {
            background-color: $bgIconSocial;
            width: 35px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            border-radius: 50%;
            font-size: 16px;
            cursor: pointer;

            a {
                color: $primaryColor;
                text-decoration: none;
            }
        }
    }
}


.bottom_footer {
    @include between();

    // grafica menu link info privacy e cookie
    .link_info {
        margin-top: 20px;

        ul {
            @include start();
            gap: 20px;

            li {
                list-style: none;
                margin-bottom: 5px;

                a {
                    color: $secondaryColor;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;

                    &:hover {
                        text-decoration: underline;
                        color: $primaryColor;
                    }
                }
            }
        }

    }

    // grafica copyright
    .copyright {
        color: $secondaryColor;
        font-size: 13px;
        font-weight: 600;
    }
}
</style>