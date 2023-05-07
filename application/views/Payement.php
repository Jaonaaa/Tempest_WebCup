<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="<?php echo base_url(); ?>assets/icon/favicon.ico" type="image/x-icon">
    <title>Prédiction</title>
    <link rel="stylesheet" href="
    <?php echo base_url("assets/css/components/reset.css"); ?>
    " />
    <link rel="stylesheet" href="
    <?php echo base_url("assets/css/components/index.css"); ?>
    " />
    <link rel="stylesheet" href="<?php echo base_url("assets/css/Footer.css"); ?>">
    <link rel="stylesheet" href="<?php echo base_url("assets/css/PopUp.css"); ?>">
    <link rel="stylesheet" href="<?php echo base_url("assets/fonts/fontawesome-5/css/all.min.css"); ?>">
    <link rel="stylesheet" href="<?php echo base_url("assets/css/Payement.css"); ?>">
    <link rel="stylesheet" href="<?php echo base_url("assets/css/components/header.css"); ?>" />

</head>
<style>
    @font-face {
        font-family: Poppins;
        src: url(<?php echo base_url("assets/fonts/Poppins-Light.ttf"); ?>);
    }

    @font-face {
        font-family: Playfair Display Regular;
        src: url(<?php echo base_url("assets/fonts/PlayfairDisplay-Regular.ttf"); ?>);
    }

    @font-face {
        font-family: Dancing;
        src: url(<?php echo base_url("assets/fonts/DancingScript-Regular.ttf"); ?>);
    }
</style>

<body class="light">
    <?php include("Header.php"); ?>
    <div id="root">
        <div class="container_payement">
            <div class="section_left">
                <div class="title_payement">Abonnement</div>
                <div class="subtitle_payement">
                    Abonner vous à nous pour bénéfier de prédiction plus détailler de vos reves
                </div>
                <div class="box_abonne">
                    <div class="title_abonnement">
                        Types d'abonnement
                    </div>
                    <div class="subtitle_abonnement">
                        Il existe 3 types d'abonnement chez nous , veuillez choisir celle qui vous
                        conviendra
                    </div>
                    <div class="list_abonne">
                        <div class="row_abonne">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.915" height="25.603"
                                    viewBox="0 0 12.915 22.603">
                                    <path id="Icon_ionic-ios-flash" data-name="Icon ionic-ios-flash"
                                        d="M21.518,11.933H16.06L18.7,2.506a.2.2,0,0,0-.363-.171L9.075,14.485a.425.425,0,0,0,.318.676H14.85l-2.643,9.427a.2.2,0,0,0,.363.171l9.265-12.145A.43.43,0,0,0,21.518,11.933Z"
                                        transform="translate(-8.996 -2.246)" fill="#00c79f" />
                                </svg>

                            </div>
                            <div class="about_abonne">
                                <div class="title_abonne">Simple</div>
                                <div class="subtitle_abonne">Pour une durée de 3 mois</div>
                            </div>
                            <div class="check_selection">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 21">
                                    <g id="checked" transform="translate(-310 -468)">
                                        <g id="Ellipse_14" data-name="Ellipse 14" transform="translate(310 468)"
                                            fill="#fff" stroke="#00941e" stroke-width="1">
                                            <circle cx="10.5" cy="10.5" r="10.5" stroke="none" />
                                            <circle cx="10.5" cy="10.5" r="10" fill="none" />
                                        </g>
                                        <path id="Icon_feather-check" data-name="Icon feather-check"
                                            d="M15.879,9,9.087,15.792,6,12.7" transform="translate(309.561 466)"
                                            fill="none" stroke="#00941e" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1" />
                                    </g>
                                </svg>

                            </div>
                            <div class="price_abonne">
                                <div class="unite"> $ </div>
                                <div class="price_value"> 20</div>
                            </div>
                        </div>


                        <div class="row_abonne">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.915" height="25.603"
                                    viewBox="0 0 12.915 22.603">
                                    <path id="Icon_ionic-ios-flash" data-name="Icon ionic-ios-flash"
                                        d="M21.518,11.933H16.06L18.7,2.506a.2.2,0,0,0-.363-.171L9.075,14.485a.425.425,0,0,0,.318.676H14.85l-2.643,9.427a.2.2,0,0,0,.363.171l9.265-12.145A.43.43,0,0,0,21.518,11.933Z"
                                        transform="translate(-8.996 -2.246)" fill="#00c79f" />
                                </svg>

                            </div>
                            <div class="about_abonne">
                                <div class="title_abonne">Silver</div>
                                <div class="subtitle_abonne">Pour une durée de 6 mois</div>
                            </div>
                            <div class="check_selection">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 21">
                                    <g id="checked" transform="translate(-310 -468)">
                                        <g id="Ellipse_14" data-name="Ellipse 14" transform="translate(310 468)"
                                            fill="#fff" stroke="#00941e" stroke-width="1">
                                            <circle cx="10.5" cy="10.5" r="10.5" stroke="none" />
                                            <circle cx="10.5" cy="10.5" r="10" fill="none" />
                                        </g>
                                        <path id="Icon_feather-check" data-name="Icon feather-check"
                                            d="M15.879,9,9.087,15.792,6,12.7" transform="translate(309.561 466)"
                                            fill="none" stroke="#00941e" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1" />
                                    </g>
                                </svg>

                            </div>
                            <div class="price_abonne">
                                <div class="unite"> $ </div>
                                <div class="price_value"> 50</div>
                            </div>
                        </div>
                        <div class="row_abonne">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.915" height="25.603"
                                    viewBox="0 0 12.915 22.603">
                                    <path id="Icon_ionic-ios-flash" data-name="Icon ionic-ios-flash"
                                        d="M21.518,11.933H16.06L18.7,2.506a.2.2,0,0,0-.363-.171L9.075,14.485a.425.425,0,0,0,.318.676H14.85l-2.643,9.427a.2.2,0,0,0,.363.171l9.265-12.145A.43.43,0,0,0,21.518,11.933Z"
                                        transform="translate(-8.996 -2.246)" fill="#00c79f" />
                                </svg>

                            </div>
                            <div class="about_abonne">
                                <div class="title_abonne">Gold</div>
                                <div class="subtitle_abonne">Pour une durée de 1 an</div>
                            </div>
                            <div class="check_selection">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 21">
                                    <g id="checked" transform="translate(-310 -468)">
                                        <g id="Ellipse_14" data-name="Ellipse 14" transform="translate(310 468)"
                                            fill="#fff" stroke="#00941e" stroke-width="1">
                                            <circle cx="10.5" cy="10.5" r="10.5" stroke="none" />
                                            <circle cx="10.5" cy="10.5" r="10" fill="none" />
                                        </g>
                                        <path id="Icon_feather-check" data-name="Icon feather-check"
                                            d="M15.879,9,9.087,15.792,6,12.7" transform="translate(309.561 466)"
                                            fill="none" stroke="#00941e" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1" />
                                    </g>
                                </svg>

                            </div>
                            <div class="price_abonne">
                                <div class="unite"> $ </div>
                                <div class="price_value"> 90</div>
                            </div>
                        </div>

                    </div>
                    <div class="button_buy">
                        Acheter <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.015" height="11.526"
                                viewBox="0 0 16.015 11.526">
                                <path id="Icon_awesome-opencart" data-name="Icon awesome-opencart"
                                    d="M10.593,12.192a1.144,1.144,0,1,1-1.141-1.146,1.137,1.137,0,0,1,1.141,1.146ZM4.239,11.046a1.144,1.144,0,1,0,1.146,1.146A1.143,1.143,0,0,0,4.239,11.046Zm7.3-6.757C3.976,4.289,2.049,3.969,0,1.807.861,3.1,1.334,5.533,9.336,5.416c8.341-.125,3.253,2.155,1.772,4.727C15.78,5.971,19.1,4.289,11.539,4.289Z"
                                    transform="translate(0 -1.807)" fill="#f0f0f0" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section_right">
                <svg xmlns="http://www.w3.org/2000/svg" width="489.005" height="368.096" viewBox="0 0 489.005 368.096">
                    <g id="Groupe_58" data-name="Groupe 58" transform="translate(0 0)">
                        <path id="Tracé_195" data-name="Tracé 195"
                            d="M842.786,672.061l1.573-.031a364.806,364.806,0,0,0-5.584-52.137c-6.8-36.873-18.113-61.09-33.619-71.977l-.9,1.287C840.473,574.636,842.767,671.09,842.786,672.061Z"
                            transform="translate(-436.997 -304.491)" fill="#2f2e41" />
                        <path id="Tracé_196" data-name="Tracé 196"
                            d="M823.763,690.573l1.573-.031c-.034-1.742-1.017-42.8-17.18-54.146l-.9,1.287C822.763,648.573,823.755,690.154,823.763,690.573Z"
                            transform="translate(-435.073 -323.379)" fill="#2f2e41" />
                        <circle id="Ellipse_16" data-name="Ellipse 16" cx="7.865" cy="7.865" r="7.865"
                            transform="translate(356.436 229.126)" fill="#6c63ff" />
                        <circle id="Ellipse_17" data-name="Ellipse 17" cx="7.865" cy="7.865" r="7.865"
                            transform="translate(359.695 296.767)" fill="#6c63ff" />
                        <path id="Tracé_197" data-name="Tracé 197"
                            d="M832.813,551.3a34.936,34.936,0,0,0,2.375,17.886A31.839,31.839,0,0,0,840.541,535,34.936,34.936,0,0,0,832.813,551.3Z"
                            transform="translate(-442.732 -301.734)" fill="#2f2e41" />
                        <path id="Tracé_198" data-name="Tracé 198"
                            d="M796.226,581.821a34.937,34.937,0,0,0,18.026.778,31.839,31.839,0,0,0-32.735-11.228A34.935,34.935,0,0,0,796.226,581.821Z"
                            transform="translate(-428.123 -309.32)" fill="#2f2e41" />
                        <path id="Tracé_199" data-name="Tracé 199"
                            d="M797.05,658.877a24.488,24.488,0,0,0,12.635.546,22.316,22.316,0,0,0-22.945-7.87A24.488,24.488,0,0,0,797.05,658.877Z"
                            transform="translate(-428.664 -326.473)" fill="#2f2e41" />
                        <path id="Tracé_200" data-name="Tracé 200"
                            d="M540.169,377.866,489.459,351.5s-17.029-18.753-27.723-27.224-13.987-2.248-13.987-2.248l-4.5,7.493,10.864,15.111,29.347,24.851L535.9,390.019a8.315,8.315,0,1,0,4.266-12.153Z"
                            transform="translate(-315.423 -255.799)" fill="#9f616a" />
                        <path id="Tracé_201" data-name="Tracé 201"
                            d="M387.329,359.034l-3-18.367-8.477-2.119s-6.728-2.072-8.3,11.479-.353,38.854-.353,38.854l-17.211,54.5a8.334,8.334,0,1,0,11.61,5.577l22.556-51.6Z"
                            transform="translate(-262.804 -259.772)" fill="#9f616a" />
                        <path id="Tracé_202" data-name="Tracé 202" d="M246.544,442.3h11.092l5.278-42.786H246.542Z"
                            transform="translate(-84.294 -85.285)" fill="#9f616a" />
                        <path id="Tracé_203" data-name="Tracé 203"
                            d="M484.324,687.733h21.847a13.923,13.923,0,0,1,13.922,13.921v.453H484.325Z"
                            transform="translate(-325.551 -334.338)" fill="#2f2e41" />
                        <path id="Tracé_204" data-name="Tracé 204" d="M92.716,442.3h11.093l5.277-42.786H92.714Z"
                            transform="translate(-19.792 -85.285)" fill="#9f616a" />
                        <path id="Tracé_205" data-name="Tracé 205"
                            d="M330.495,687.733h21.847a13.922,13.922,0,0,1,13.922,13.921v.453H330.5Z"
                            transform="translate(-260.401 -334.338)" fill="#2f2e41" />
                        <path id="Tracé_206" data-name="Tracé 206"
                            d="M385.4,317.322,367,333.028l15.1,47.784,3.407,10.67s-20.8,19.181-33.676,72.763S317.9,589.026,317.9,589.026l44.448,12.724,36.162-121.209,42.535,95.092,4.911,28.126L483.81,592.6l-8.929-70.538-44.644-122.1,4.637-32.367s6.964-16.156-5.134-33.26l-3.795-16.072-13.594-3.348Z"
                            transform="translate(-257.712 -254.751)" fill="#2f2e41" />
                        <path id="Tracé_207" data-name="Tracé 207"
                            d="M428.033,292.455H378.288a3.864,3.864,0,0,1-3.859-3.859V267.154a28.732,28.732,0,0,1,57.463,0V288.6a3.864,3.864,0,0,1-3.859,3.859Z"
                            transform="translate(-288.208 -238.423)" fill="#2f2e41" />
                        <circle id="Ellipse_18" data-name="Ellipse 18" cx="21.065" cy="21.065" r="21.065"
                            transform="translate(91.213 40.849) rotate(-61.337)" fill="#9f616a" />
                        <path id="Tracé_208" data-name="Tracé 208"
                            d="M442.63,271.393H412.212l-.312-4.367-1.56,4.367h-4.684l-.618-8.655-3.091,8.655h-9.063v-.429a22.754,22.754,0,0,1,22.728-22.728H419.9a22.754,22.754,0,0,1,22.728,22.728Z"
                            transform="translate(-294.4 -240.518)" fill="#2f2e41" />
                        <path id="Tracé_209" data-name="Tracé 209"
                            d="M410.91,301.135a3.943,3.943,0,0,1-.683-.06l-22.273-3.93v-36.81h24.518l-.607.708c-8.445,9.85-2.083,25.821,2.462,34.465a3.8,3.8,0,0,1-.3,4.037,3.844,3.844,0,0,1-3.115,1.591Z"
                            transform="translate(-291.847 -243.1)" fill="#2f2e41" />
                        <path id="Tracé_210" data-name="Tracé 210"
                            d="M582.265,521.65l-195.2,69.015a19.322,19.322,0,0,1-24.63-11.763L328.9,484.058a19.322,19.322,0,0,1,11.763-24.63l195.2-69.015a19.322,19.322,0,0,1,24.63,11.763l33.533,94.843A19.322,19.322,0,0,1,582.265,521.65Z"
                            transform="translate(-259.825 -270.633)" fill="#fff" />
                        <path id="Tracé_211" data-name="Tracé 211"
                            d="M603.608,526.253l.177.5a18.432,18.432,0,0,1-11.238,23.52l-196.177,69.36A18.431,18.431,0,0,1,372.853,608.4l-.177-.5Z"
                            transform="translate(-296.693 -299.866)" fill="#f2f2f2" />
                        <path id="Tracé_212" data-name="Tracé 212"
                            d="M378.074,503.418c-12.939,8.514-29.522,2.106-35.321-7.226l.925-.525C354.693,488.8,371.051,492.626,378.074,503.418Z"
                            transform="translate(-262.317 -292.602)" fill="#6c63ff" />
                        <path id="Tracé_213" data-name="Tracé 213"
                            d="M588.066,524.158a10.589,10.589,0,0,1-8.476-.153c-5.555-2.76-8.162-10.944-10.256-17.52-.609-1.913-1.185-3.72-1.771-5.2l-.008-.022a11.777,11.777,0,0,1,7.137-14.953l26.256-9.283a10.582,10.582,0,0,1,8.467.152c5.554,2.757,8.162,10.938,10.259,17.511.611,1.917,1.189,3.728,1.777,5.207a11.784,11.784,0,0,1-7.134,14.978Zm-19.412-23.29c.6,1.512,1.18,3.334,1.794,5.262,2.028,6.366,4.551,14.288,9.662,16.827a9.35,9.35,0,0,0,7.566.1l26.248-9.28a10.607,10.607,0,0,0,6.43-13.466c-.595-1.494-1.178-3.324-1.8-5.261-2.029-6.363-4.555-14.283-9.664-16.819a9.343,9.343,0,0,0-7.557-.1l-26.255,9.283A10.6,10.6,0,0,0,568.654,500.868Z"
                            transform="translate(-355.761 -289.187)" fill="#3f3d56" />
                        <path id="Tracé_214" data-name="Tracé 214"
                            d="M372.292,506.311a26.1,26.1,0,0,1-14.345.789c-6.953-1.527-13.264-5.678-16.469-10.834l-.321-.517,1.443-.82c11.181-6.964,27.947-3.189,35.184,7.93l.317.488-.486.32a24.556,24.556,0,0,1-5.324,2.645ZM342.8,496.159c3.136,4.66,8.972,8.387,15.4,9.8a24.382,24.382,0,0,0,18.278-2.95c-7.079-10.24-22.763-13.637-33.267-7.08Z"
                            transform="translate(-261.985 -292.43)" fill="#3f3d56" />
                        <path id="Tracé_215" data-name="Tracé 215"
                            d="M385.655,587.8a9.708,9.708,0,0,1-9.871-1.639,12.143,12.143,0,0,1-3.972-11.224,9.742,9.742,0,0,1,6.842-7.553l34.984-12.369A9.759,9.759,0,0,1,423.7,556.6a12.143,12.143,0,0,1,3.967,11.224,9.784,9.784,0,0,1-6.843,7.543l-34.984,12.369Zm-6.785-19.254a8.6,8.6,0,0,0-5.91,6.61,10.939,10.939,0,0,0,3.579,10.112,8.606,8.606,0,0,0,8.9,1.366l35-12.375a8.619,8.619,0,0,0,6.076-6.657,10.938,10.938,0,0,0-3.575-10.112,8.643,8.643,0,0,0-8.908-1.376l-35,12.376-.161.055Z"
                            transform="translate(-287.181 -305.848)" fill="#3f3d56" />
                        <path id="Tracé_216" data-name="Tracé 216"
                            d="M590.057,500.146l-11.028,3.9a2.924,2.924,0,1,1-1.95-5.514l11.028-3.9a2.924,2.924,0,1,1,1.95,5.514Z"
                            transform="translate(-355.527 -293.08)" fill="#6c63ff" />
                        <path id="Tracé_217" data-name="Tracé 217"
                            d="M594.023,511.364,583,515.263a2.924,2.924,0,1,1-1.95-5.514l11.028-3.9a2.924,2.924,0,1,1,1.95,5.514Z"
                            transform="translate(-356.883 -295.475)" fill="#6c63ff" />
                        <path id="Tracé_218" data-name="Tracé 218"
                            d="M597.989,522.581l-11.028,3.9a2.924,2.924,0,1,1-1.95-5.514l11.028-3.9a2.924,2.924,0,1,1,1.95,5.514Z"
                            transform="translate(-358.24 -297.87)" fill="#6c63ff" />
                        <path id="Tracé_219" data-name="Tracé 219"
                            d="M614.6,491.471l-11.028,3.9a2.924,2.924,0,0,1-1.95-5.514l11.028-3.9a2.924,2.924,0,0,1,1.95,5.514Z"
                            transform="translate(-363.919 -291.228)" fill="#6c63ff" />
                        <path id="Tracé_220" data-name="Tracé 220"
                            d="M618.561,502.688l-11.028,3.9a2.924,2.924,0,1,1-1.95-5.514l11.028-3.9a2.924,2.924,0,0,1,1.95,5.514Z"
                            transform="translate(-365.276 -293.623)" fill="#6c63ff" />
                        <path id="Tracé_221" data-name="Tracé 221"
                            d="M622.527,513.9,611.5,517.8a2.924,2.924,0,0,1-1.95-5.514l11.028-3.9a2.924,2.924,0,0,1,1.95,5.514Z"
                            transform="translate(-366.632 -296.017)" fill="#6c63ff" />
                        <rect id="Rectangle_28" data-name="Rectangle 28" width="244.942" height="1.17"
                            transform="matrix(0.943, -0.333, 0.333, 0.943, 78.238, 233.838)" fill="#3f3d56" />
                        <path id="Tracé_222" data-name="Tracé 222"
                            d="M582.265,521.65l-195.2,69.015a19.322,19.322,0,0,1-24.63-11.763L328.9,484.058a19.322,19.322,0,0,1,11.763-24.63l195.2-69.015a19.322,19.322,0,0,1,24.63,11.763l33.533,94.843A19.322,19.322,0,0,1,582.265,521.65ZM341.053,460.531A18.151,18.151,0,0,0,330,483.668l33.533,94.844a18.152,18.152,0,0,0,23.138,11.05l195.2-69.015a18.151,18.151,0,0,0,11.05-23.138l-33.533-94.843a18.152,18.152,0,0,0-23.138-11.05Z"
                            transform="translate(-259.825 -270.633)" fill="#3f3d56" />
                        <path id="Tracé_223" data-name="Tracé 223"
                            d="M729.72,706H242.038a.8.8,0,0,1,0-1.573H729.72a.8.8,0,0,1,0,1.573Z"
                            transform="translate(-241.376 -337.901)" fill="#cbcbcb" />
                    </g>
                </svg>

            </div>
        </div>

    </div>
    <?php include("Footer.php"); ?>
</body>
<script>
    var base_url = '<?php echo base_url(); ?>';
</script>
<script defer type="module" src="<?php echo base_url("assets/js/components/window.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/Utilities.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/style.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/Utilities.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/Hider.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/PopUp.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/Loading.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/payement.js"); ?>"></script>
<script defer type="module" src="<?php echo base_url("assets/js/components/sidebar.js"); ?>"></script>


</html>