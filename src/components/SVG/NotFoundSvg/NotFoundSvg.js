import React from 'react';
import useWebAnimations, { fadeIn } from '@wellyshen/use-web-animations';

import styles from './NotFoundSvg.module.css';

const NotFoundSvg = () => {

    const fadeInEffect = useWebAnimations({ ...fadeIn });

    return (
        <svg className={styles.notFoundSvg} width="1058" height="785" viewBox="0 0 1058 785" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="notfound" ref={fadeInEffect.ref}>
                <path id="background" opacity="0.5" d="M191.802 115.432C186.322 122.082 184.212 131.432 181.852 140.222C162.852 211.062 116.032 268.042 62.7121 308.742C40.1321 325.982 12.6421 349.102 17.5821 380.012C20.2421 396.612 31.9121 408.832 40.5821 422.352C58.7721 450.662 64.6721 489.142 56.0021 523.032C46.1421 561.592 18.5821 597.572 27.1121 636.562C32.3721 660.562 50.2321 677.642 67.4021 692.322C94.1887 715.209 121.829 736.649 150.322 756.642C169.422 770.042 189.742 783.082 212.002 784.782C231.602 786.282 250.802 778.832 269.412 771.482C285.672 765.052 302.342 758.362 315.472 745.482C324.042 737.072 330.872 726.222 340.392 719.342C362.752 703.182 391.472 713.422 417.112 720.342C477.612 736.582 542.362 730.652 599.932 703.602C688.242 662.102 755.552 574.952 841.932 528.192C879.072 508.082 919.472 495.602 953.862 469.702C973.237 454.956 989.887 436.938 1003.06 416.462C1029.06 376.352 1043.12 325.212 1039.06 275.152C1035 225.092 1012.25 176.852 976.522 148.592C938.272 118.342 889.962 112.692 846.442 94.5322C801.502 75.7722 761.522 43.5322 717.012 23.4022C680.996 7.15881 641.8 -0.814994 602.3 0.0657809C562.8 0.946555 523.998 10.6596 488.742 28.4922C440.302 52.9922 391.202 110.152 337.252 114.492C298.812 117.492 221.822 79.0122 191.802 115.432Z" fill="#FFF" />
                <g id="four-1">
                    <path id="Vector" d="M305.311 513.517H269.777V408.877C269.777 403.32 267.569 397.989 263.639 394.059C259.709 390.129 254.379 387.922 248.821 387.922H240.495C237.743 387.922 235.018 388.464 232.475 389.517C229.933 390.57 227.623 392.113 225.677 394.059C223.731 396.005 222.187 398.315 221.134 400.858C220.081 403.4 219.539 406.125 219.539 408.877V513.517H119.309C117.247 513.517 115.22 512.984 113.425 511.97C111.629 510.955 110.127 509.494 109.062 507.728C107.998 505.962 107.408 503.951 107.35 501.89C107.292 499.829 107.768 497.788 108.731 495.965L214.814 295.184C216.136 292.681 216.938 289.936 217.17 287.114C217.402 284.293 217.061 281.453 216.165 278.768C215.27 276.082 213.84 273.605 211.961 271.487C210.082 269.37 207.793 267.654 205.233 266.445L198.971 263.488C194.108 261.192 188.549 260.853 183.444 262.541C178.338 264.23 174.077 267.816 171.542 272.558L42.1602 514.591C39.957 518.712 38.8043 523.314 38.8043 527.987V527.987C38.8043 531.719 39.5393 535.414 40.9673 538.861C42.3954 542.309 44.4885 545.441 47.1271 548.08C49.7658 550.719 52.8983 552.812 56.3459 554.24C59.7935 555.668 63.4885 556.403 67.2202 556.403H219.539V622.57C219.539 625.869 220.189 629.135 221.451 632.183C222.713 635.23 224.564 637.999 226.896 640.332C229.229 642.664 231.998 644.515 235.045 645.777C238.093 647.039 241.359 647.689 244.658 647.689H244.658C247.957 647.689 251.223 647.039 254.271 645.777C257.318 644.515 260.087 642.664 262.42 640.332C264.752 637.999 266.603 635.23 267.865 632.183C269.127 629.135 269.777 625.869 269.777 622.57V556.403H305.311C310.998 556.403 316.452 554.144 320.474 550.122C324.495 546.101 326.754 540.647 326.754 534.96V534.96C326.754 529.273 324.495 523.819 320.474 519.797C316.453 515.776 310.998 513.517 305.311 513.517V513.517Z" fill="#6C63FF" />
                    <path id="Vector_2" d="M315.114 501.264H279.58V396.624C279.58 393.872 279.038 391.147 277.984 388.605C276.931 386.062 275.388 383.752 273.442 381.806C271.496 379.86 269.186 378.317 266.643 377.263C264.101 376.21 261.376 375.668 258.624 375.668H250.297C244.74 375.668 239.409 377.876 235.479 381.806C231.549 385.736 229.341 391.066 229.341 396.624V501.264H129.111C127.049 501.264 125.023 500.731 123.227 499.716C121.432 498.702 119.929 497.241 118.865 495.475C117.801 493.709 117.211 491.698 117.153 489.637C117.095 487.576 117.571 485.535 118.534 483.712L224.616 282.931C225.939 280.428 226.74 277.683 226.973 274.861C227.205 272.04 226.863 269.2 225.968 266.514C225.072 263.828 223.642 261.352 221.763 259.234C219.884 257.116 217.596 255.401 215.036 254.192L208.773 251.235C203.911 248.939 198.352 248.6 193.246 250.288C188.141 251.976 183.879 255.563 181.344 260.305L51.9627 502.338C49.7595 506.459 48.6069 511.06 48.6069 515.734V515.734C48.6069 523.27 51.6007 530.498 56.9297 535.827C62.2587 541.156 69.4864 544.15 77.0227 544.15H229.341V610.317C229.341 613.616 229.991 616.882 231.254 619.93C232.516 622.977 234.366 625.746 236.699 628.079C239.031 630.411 241.8 632.262 244.848 633.524C247.895 634.786 251.162 635.436 254.46 635.436H254.461C261.122 635.436 267.512 632.789 272.222 628.079C276.933 623.368 279.58 616.979 279.58 610.317V544.15H315.114C317.93 544.15 320.718 543.595 323.32 542.517C325.921 541.44 328.285 539.86 330.276 537.869C332.268 535.878 333.847 533.514 334.925 530.913C336.002 528.311 336.557 525.523 336.557 522.707V522.707C336.557 519.891 336.002 517.102 334.925 514.501C333.847 511.899 332.268 509.535 330.276 507.544C328.285 505.553 325.921 503.973 323.32 502.896C320.718 501.818 317.93 501.264 315.114 501.264V501.264Z" stroke="#3F3D56" strokeMiterlimit="10" />
                </g>
                <g id="four-2">
                    <path id="Vector_3" d="M963.308 513.517H927.774V408.877C927.774 403.32 925.566 397.989 921.636 394.059C917.706 390.129 912.376 387.922 906.818 387.922H898.491C895.739 387.922 893.014 388.464 890.472 389.517C887.929 390.57 885.619 392.113 883.673 394.059C881.727 396.005 880.184 398.315 879.131 400.858C878.077 403.4 877.535 406.125 877.535 408.877V513.517H777.305C775.243 513.517 773.216 512.984 771.421 511.97C769.626 510.955 768.123 509.494 767.059 507.728C765.995 505.962 765.405 503.951 765.347 501.89C765.289 499.829 765.764 497.788 766.728 495.965L872.81 295.184C874.133 292.681 874.934 289.936 875.167 287.114C875.399 284.293 875.057 281.453 874.162 278.768C873.266 276.082 871.836 273.605 869.957 271.487C868.078 269.37 865.79 267.654 863.23 266.445L856.967 263.488C852.105 261.192 846.546 260.853 841.44 262.541C836.334 264.23 832.073 267.816 829.538 272.558L700.157 514.591C697.953 518.712 696.801 523.314 696.801 527.987V527.987C696.801 535.523 699.795 542.751 705.124 548.08C710.453 553.409 717.68 556.403 725.217 556.403H877.535V622.57C877.535 629.232 880.182 635.621 884.893 640.332C889.603 645.043 895.992 647.689 902.654 647.689V647.689C909.316 647.689 915.706 645.043 920.416 640.332C925.127 635.621 927.773 629.232 927.773 622.57V556.403H963.308C968.995 556.403 974.449 554.144 978.47 550.122C982.492 546.101 984.751 540.647 984.751 534.96V534.96C984.751 529.273 982.492 523.819 978.47 519.797C974.449 515.776 968.995 513.517 963.308 513.517Z" fill="#6C63FF" />
                    <path id="Vector_4" d="M981.688 501.264H946.153V396.624C946.153 391.066 943.945 385.736 940.016 381.806C936.086 377.876 930.755 375.668 925.197 375.668H916.871C914.119 375.668 911.394 376.21 908.852 377.263C906.309 378.317 903.999 379.86 902.053 381.806C900.107 383.752 898.564 386.062 897.51 388.605C896.457 391.147 895.915 393.872 895.915 396.624V501.264H795.685C793.623 501.264 791.596 500.731 789.801 499.716C788.006 498.702 786.503 497.241 785.439 495.475C784.374 493.709 783.785 491.698 783.727 489.637C783.669 487.576 784.144 485.535 785.108 483.712L891.19 282.931C892.512 280.428 893.314 277.683 893.546 274.861C893.779 272.04 893.437 269.2 892.542 266.514C891.646 263.828 890.216 261.352 888.337 259.234C886.458 257.116 884.17 255.401 881.61 254.192L875.347 251.235C870.485 248.939 864.925 248.6 859.82 250.288C854.714 251.976 850.453 255.563 847.918 260.305L718.536 502.338C716.333 506.459 715.181 511.06 715.181 515.734C715.181 523.27 718.174 530.498 723.503 535.827C728.832 541.156 736.06 544.15 743.596 544.15H895.915V610.317C895.915 616.979 898.562 623.368 903.272 628.079C907.983 632.789 914.372 635.436 921.034 635.436V635.436C927.696 635.436 934.085 632.789 938.796 628.079C943.507 623.368 946.153 616.979 946.153 610.317V544.15H981.688C984.504 544.15 987.292 543.595 989.893 542.517C992.495 541.44 994.859 539.86 996.85 537.869C998.841 535.878 1000.42 533.514 1001.5 530.913C1002.58 528.311 1003.13 525.523 1003.13 522.707V522.707C1003.13 517.02 1000.87 511.565 996.85 507.544C992.829 503.523 987.375 501.264 981.688 501.264V501.264Z" stroke="#3F3D56" strokeMiterlimit="10" />
                </g>
                <g id="zero">
                    <path id="Vector_24" d="M504.426 247.01C418.482 247.01 356.775 302.149 356.775 430.808C356.775 576.621 418.482 615.218 504.426 615.218C590.37 615.218 655.753 572.945 655.753 430.808C655.753 278.868 590.37 247.01 504.426 247.01ZM504.991 566.818C445.464 566.818 414.365 531.895 414.365 430.902C414.365 341.79 446.737 294.797 506.264 294.797C565.791 294.797 598.163 325.665 598.163 430.902C598.163 529.349 564.517 566.818 504.991 566.818Z" fill="#2F2E41" />
                    <path id="Vector_25" d="M524.031 235.982C438.087 235.982 376.38 291.121 376.38 419.78C376.38 565.593 438.087 604.19 524.031 604.19C609.975 604.19 675.358 561.917 675.358 419.78C675.358 267.84 609.975 235.982 524.031 235.982ZM524.596 555.79C465.069 555.79 433.97 520.867 433.97 419.874C433.97 330.762 466.342 283.769 525.869 283.769C585.396 283.769 617.768 314.637 617.768 419.874C617.768 518.321 584.123 555.79 524.596 555.79V555.79Z" stroke="#3F3D56" strokeMiterlimit="10" />
                    <path id="Vector_26" d="M455.141 111.152C462.266 111.152 468.042 105.376 468.042 98.2504C468.042 91.1253 462.266 85.3493 455.141 85.3493C448.016 85.3493 442.24 91.1253 442.24 98.2504C442.24 105.376 448.016 111.152 455.141 111.152Z" fill="#2F2E41" />
                    <path id="Vector_27" d="M486.607 173.77C506.592 173.77 522.794 152.779 522.794 126.885C522.794 100.991 506.592 80 486.607 80C466.622 80 450.421 100.991 450.421 126.885C450.421 152.779 466.622 173.77 486.607 173.77Z" fill="#2F2E41" />
                    <path id="Vector_28" opacity="0.1" d="M486.607 159.61C468.48 159.61 453.466 142.339 450.832 119.805C450.558 122.155 450.421 124.519 450.421 126.885C450.421 152.778 466.622 173.77 486.607 173.77C506.592 173.77 522.794 152.779 522.794 126.885C522.794 124.519 522.657 122.155 522.383 119.805C519.749 142.339 504.735 159.61 486.607 159.61Z" fill="black" />
                    <path id="Vector_29" d="M560.242 264.189C559.465 267.382 556.114 269.94 552.403 271.727C544.602 275.483 534.978 276.605 525.644 276.981C523.262 277.126 520.873 277.081 518.499 276.849C513.898 276.404 509.582 274.42 506.249 271.217C506.011 271.062 505.816 270.849 505.683 270.599C505.549 270.348 505.481 270.067 505.486 269.783C505.49 269.499 505.566 269.221 505.707 268.975C505.849 268.728 506.05 268.521 506.292 268.374C511.262 262.915 519.555 259.567 527.909 257.157C534.243 255.33 545.29 250.597 552.199 251.235C558.89 251.854 561.223 260.157 560.242 264.189Z" fill="#3F3D56" />
                    <path id="Vector_30" opacity="0.1" d="M560.242 264.189C559.465 267.382 556.114 269.94 552.403 271.727C544.602 275.483 534.978 276.605 525.644 276.981C523.262 277.126 520.873 277.081 518.499 276.849C513.898 276.404 509.582 274.42 506.249 271.217C506.011 271.062 505.816 270.849 505.683 270.599C505.549 270.348 505.481 270.067 505.486 269.783C505.49 269.499 505.566 269.221 505.707 268.975C505.849 268.728 506.05 268.521 506.292 268.374C511.262 262.915 519.555 259.567 527.909 257.157C534.243 255.33 545.29 250.597 552.199 251.235C558.89 251.854 561.223 260.157 560.242 264.189Z" fill="black" />
                    <path id="Vector_31" d="M461.044 240.321C458.662 244.989 458.231 250.411 459.845 255.396C461.487 260.344 464.56 264.693 468.674 267.893C478.769 275.985 492.662 277.098 505.599 276.986C516.937 276.887 528.259 276.111 539.504 274.662C543.273 274.328 546.976 273.468 550.506 272.107C554.728 270.281 558.439 266.93 559.942 262.582C561.445 258.234 560.378 252.909 556.808 250.008C553.671 247.458 549.345 247.107 545.31 246.865L522.223 245.477C524.504 243.169 527.541 241.863 530.318 240.185C534.004 237.959 536.452 234.22 539.132 230.85C543.26 225.916 547.752 221.297 552.57 217.033C553.322 221.344 556.048 224.883 559.258 227.857C562.467 230.831 566.166 233.226 569.501 236.057C577.58 242.916 583.397 252.224 591.894 258.558C597.738 257.022 603.202 254.294 607.942 250.546L604.64 244.564C604.365 243.949 603.936 243.414 603.396 243.011C602.461 242.436 601.256 242.733 600.17 242.57C597.27 242.135 596.003 238.786 594.865 236.083C591.74 228.661 585.757 222.903 580.647 216.679C576.875 212.084 573.529 207.157 570.651 201.956C568.934 198.854 567.363 195.625 565.033 192.953C562.704 190.281 559.44 188.18 555.895 188.172C552.763 188.166 549.874 189.756 547.181 191.355C538.978 196.227 531.087 201.604 523.551 207.454C519.607 210.516 515.688 213.751 511.061 215.628C509.114 216.419 507.061 216.959 505.192 217.92C501.919 219.605 499.435 222.455 496.761 224.985C487.223 234.008 474.165 239.854 461.044 240.321Z" fill="#3F3D56" />
                    <path id="Vector_32" d="M509.32 176.098C509.213 178.856 508.626 181.575 507.586 184.131C507.059 185.407 506.275 186.56 505.282 187.518C504.29 188.477 503.111 189.221 501.818 189.704C499.983 190.196 498.059 190.258 496.195 189.887C494.57 189.717 493.004 189.183 491.614 188.326C489.449 186.837 488.369 184.182 487.976 181.583C487.583 178.987 487.759 176.334 487.507 173.719C487.262 171.607 486.86 169.516 486.305 167.464C486.135 166.781 485.962 166.101 485.792 165.422C485.626 164.742 485.462 164.062 485.311 163.383C485.172 162.744 485.043 162.102 484.933 161.457C484.842 160.912 484.76 160.365 484.7 159.814C484.645 158.182 484.373 156.564 483.892 155.003C483.44 153.991 482.874 153.033 482.205 152.149C481.919 151.74 481.642 151.331 481.387 150.906C480.65 149.802 480.307 148.482 480.415 147.158C480.445 146.954 480.495 146.753 480.563 146.557C480.588 146.482 480.616 146.406 480.648 146.334C480.931 146.257 481.191 146.112 481.405 145.912C481.62 145.712 481.782 145.463 481.878 145.186C481.986 144.59 481.935 143.977 481.73 143.408C481.495 142.612 481.173 141.845 480.77 141.12C480.506 140.642 479.609 139.78 479.603 139.232C479.59 138.131 481.743 137.243 482.614 136.809C485.275 135.477 488.242 134.875 491.211 135.066C493.115 135.195 495.179 135.78 496.23 137.376C497.174 138.814 497.048 140.676 497.451 142.347C497.493 142.59 497.596 142.818 497.75 143.011C497.955 143.198 498.213 143.317 498.489 143.351C498.955 143.444 499.433 143.463 499.905 143.408H499.908C500.033 143.398 500.157 143.38 500.28 143.354C501.015 143.219 501.71 142.918 502.312 142.476C502.702 142.372 503.096 142.287 503.492 142.221C503.508 142.22 503.524 142.217 503.539 142.212C505.116 147.187 505.32 152.52 506.611 157.586C507.249 160.107 508.165 162.596 508.294 165.189C508.303 165.302 508.307 165.418 508.31 165.535C508.329 166.369 508.263 167.209 508.297 168.039C508.309 168.414 508.351 168.786 508.423 169.153C508.564 169.744 508.74 170.326 508.949 170.897L508.958 170.925C509.018 171.107 509.074 171.293 509.122 171.479C509.156 171.614 509.188 171.746 509.213 171.881L509.216 171.891C509.449 173.281 509.484 174.698 509.32 176.098V176.098Z" fill="#FBBEBE" />
                    <path id="Vector_33" d="M487.237 143.562C497.49 143.562 505.802 135.25 505.802 124.997C505.802 114.744 497.49 106.432 487.237 106.432C476.983 106.432 468.672 114.744 468.672 124.997C468.672 135.25 476.983 143.562 487.237 143.562Z" fill="#FBBEBE" />
                    <path id="Vector_34" d="M605.103 226.148C604.565 221.083 602.765 216.234 599.867 212.045C600.349 214.909 600.831 217.771 601.315 220.632C600.714 220.806 600.075 220.801 599.477 220.617C598.879 220.433 598.347 220.079 597.948 219.597C597.166 218.621 596.568 217.511 596.182 216.321C594.073 211.085 591.315 206.135 587.973 201.586C576.154 200.601 564.471 195.702 554.077 189.99C543.681 184.282 533.952 177.438 523.694 171.488C521.915 170.413 520.062 169.467 518.149 168.656C514.94 167.369 511.337 166.702 508.294 165.189C508.089 165.088 507.885 164.981 507.683 164.871C506.996 164.497 506.345 164.06 505.739 163.565C505.411 163.299 505.1 163.013 504.807 162.709C503.289 160.943 502.086 158.929 501.249 156.756C499.616 153.143 499.033 148.785 497.404 145.173C498.153 144.473 498.994 143.879 499.905 143.408H499.908C500.04 143.338 500.172 143.272 500.308 143.209C500.953 142.906 501.624 142.66 502.312 142.476C502.702 142.372 503.096 142.287 503.492 142.221C503.508 142.22 503.524 142.217 503.539 142.212C505.378 141.912 507.262 142.061 509.03 142.646C511.617 143.521 513.797 145.267 515.972 146.919C519.504 149.408 522.892 152.095 526.12 154.968C527.913 156.686 529.549 158.574 531.478 160.135C533.081 161.372 534.771 162.492 536.535 163.486C546.972 169.704 557.411 175.921 567.85 182.136C571.384 184.241 574.921 186.347 578.376 188.574C583.624 191.96 588.684 195.629 593.741 199.295C596.721 201.454 599.699 203.613 602.677 205.774C603.654 206.397 604.512 207.19 605.21 208.115C605.827 209.165 606.21 210.336 606.333 211.548C607.081 216.444 606.659 221.447 605.103 226.148V226.148Z" fill="#FBBEBE" />
                    <path id="Vector_35" d="M513.923 190.06C512.671 195.676 506.994 199.072 504.027 204.005C500.339 210.129 501.843 217.246 503.228 224.26C500.698 226.441 498.167 228.622 495.635 230.802C494.238 232.001 492.841 233.206 491.337 234.267C489.144 235.736 486.852 237.052 484.477 238.206C482.237 239.358 479.996 240.511 477.756 241.664C475.673 242.835 473.466 243.77 471.176 244.452C466.762 245.585 462.073 244.792 457.706 243.48C457.191 243.345 456.695 243.143 456.233 242.879C455.961 242.716 455.723 242.501 455.534 242.246C455.104 241.474 454.947 240.579 455.091 239.707C455.534 232.357 457.331 225.16 459.122 218.017C460.079 213.732 461.365 209.527 462.97 205.44C464.544 201.938 466.353 198.547 468.385 195.289C470.628 191.191 473.285 187.333 476.315 183.776C477.79 182.407 479.031 180.806 479.99 179.037C481.107 176.488 480.676 173.565 480.903 170.79C481.076 168.704 481.629 166.669 482.536 164.783V164.78C483.02 163.764 483.604 162.798 484.279 161.897C484.584 162.608 484.889 163.318 485.195 164.028C485.396 164.493 485.595 164.958 485.792 165.422C486.05 166.019 486.306 166.615 486.56 167.209C487.293 168.914 488.025 170.619 488.757 172.322C489.547 174.468 490.672 176.474 492.092 178.266C492.741 179.184 493.617 179.918 494.634 180.396C495.651 180.874 496.775 181.08 497.895 180.994C499.016 180.908 500.095 180.533 501.028 179.906C501.96 179.278 502.714 178.419 503.215 177.413C504.273 175.536 505.039 173.508 505.487 171.4C506.109 168.833 506.194 166.166 505.739 163.565C504.981 158.556 502.85 153.439 501.302 148.785C500.672 147.234 500.307 145.587 500.223 143.914C500.226 143.726 500.245 143.539 500.279 143.354C500.289 143.307 500.298 143.257 500.308 143.209C500.953 142.906 501.624 142.66 502.312 142.476C502.702 142.372 503.096 142.288 503.492 142.221C504.855 149.597 506.219 156.973 507.586 164.349C507.617 164.522 507.652 164.695 507.684 164.871C507.879 165.928 508.077 166.985 508.297 168.04C508.495 168.996 508.709 169.95 508.948 170.897L508.958 170.925C509.04 171.246 509.125 171.564 509.213 171.882L509.216 171.891C509.458 172.759 509.729 173.622 510.034 174.471C511.884 179.591 515.11 184.745 513.923 190.06Z" fill="#6C63FF" />
                    <path id="Vector_36" d="M589.267 268.993C589.209 270.075 589.419 271.154 589.877 272.136C591.039 274.259 593.827 274.742 596.24 274.941C610.332 276.099 624.51 275.667 638.505 273.653C639.265 273.601 640.001 273.372 640.657 272.985C642.647 271.59 641.42 268.19 639.247 267.102C637.074 266.013 634.496 266.276 632.112 265.804C629.743 265.208 627.488 264.23 625.434 262.908C620.599 260.13 615.835 257.234 611.141 254.22C608.346 252.425 605.048 250.51 601.901 251.574C593.376 254.458 589.211 259.796 589.267 268.993Z" fill="#3F3D56" />
                    <path id="Vector_37" d="M485.383 162.989V162.992C485.361 163.124 485.339 163.253 485.311 163.383C485.276 163.597 485.235 163.814 485.195 164.028C484.804 166.026 484.326 168.014 483.775 169.99C482.265 175.45 480.242 180.821 478.234 186.114C472.847 200.305 467.459 214.497 462.07 228.691C460.711 232.265 459.354 235.843 457.809 239.345C457.293 240.513 456.762 241.689 456.233 242.879C454.339 247.136 452.52 251.532 451.916 256.063C451.353 259.045 451.288 262.1 451.724 265.103C452.328 268.074 454.131 270.975 456.954 272.073C458.332 272.611 460.305 273.332 459.927 274.764C459.723 275.55 458.829 275.934 458.027 276.066C456.967 276.235 455.883 276.169 454.852 275.872C453.821 275.575 452.868 275.055 452.061 274.348C450.553 273.011 449.395 270.931 447.391 270.708C446.003 270.557 444.726 271.387 443.454 271.969C438.269 274.339 432.227 272.681 426.781 270.997C427.208 268.791 429.424 267.338 431.623 266.897C433.823 266.453 436.098 266.768 438.341 266.708C439.06 266.747 439.773 266.563 440.383 266.183C440.931 265.68 441.315 265.025 441.485 264.301C442.93 260.019 444.005 255.621 444.697 251.155C445.421 246.488 445.723 241.749 446.755 237.139C447.558 233.543 448.797 230.06 449.861 226.529C451.918 219.26 453.606 211.892 454.921 204.452C455.585 201.362 456.061 198.233 456.346 195.085C456.526 192.473 456.441 189.849 456.692 187.246C457.115 183.861 457.821 180.517 458.804 177.25C459.767 173.685 460.728 170.122 461.689 166.561C463.115 161.29 464.644 155.815 468.256 151.718C469.511 150.276 471.048 149.106 472.773 148.283C474.498 147.459 476.374 146.998 478.285 146.929C479.001 146.928 479.715 147.005 480.415 147.158C480.531 147.187 480.648 147.215 480.764 147.247C481.526 147.446 482.258 147.749 482.938 148.147C484.052 147.439 484.619 147.687 485.358 148.779C486.006 149.935 486.312 151.251 486.239 152.574C486.302 156.065 486.015 159.555 485.383 162.989Z" fill="#FBBEBE" />
                    <path id="Vector_38" d="M486.607 167.162L486.56 167.209L486.305 167.464L483.775 169.99L482.536 164.783L478.285 146.929C479.001 146.928 479.715 147.005 480.415 147.158C480.445 146.954 480.495 146.753 480.563 146.557L480.764 147.247L482.205 152.149L484.933 161.457L485.383 162.989V162.992L486.607 167.162Z" fill="#6C63FF" />
                    <path id="Vector_39" d="M502.661 110.203C502.659 111.856 502.331 113.493 501.696 115.019C501.061 116.545 500.132 117.932 498.961 119.099C498.537 119.523 498.082 119.917 497.601 120.275C495.429 121.912 492.784 122.798 490.065 122.799H474.969C471.633 122.794 468.436 121.465 466.079 119.105C463.722 116.744 462.398 113.545 462.398 110.209C462.398 106.873 463.722 103.674 466.079 101.313C468.436 98.9526 471.633 97.6239 474.969 97.6187H490.065C493.401 97.6274 496.598 98.9556 498.958 101.313C501.318 103.671 502.649 106.867 502.661 110.203V110.203Z" fill="#2F2E41" />
                    <path id="Vector_40" d="M516.815 111.152C523.94 111.152 529.716 105.376 529.716 98.2504C529.716 91.1253 523.94 85.3493 516.815 85.3493C509.69 85.3493 503.914 91.1253 503.914 98.2504C503.914 105.376 509.69 111.152 516.815 111.152Z" fill="#2F2E41" />
                    <path id="Vector_41" opacity="0.1" d="M516.5 85.3493C516.342 85.3493 516.185 85.3555 516.028 85.3612C519.366 85.4825 522.526 86.8936 524.844 89.2975C527.162 91.7015 528.457 94.9109 528.457 98.2504C528.457 101.59 527.162 104.799 524.844 107.203C522.526 109.607 519.366 111.018 516.028 111.14C516.185 111.145 516.342 111.152 516.5 111.152C519.922 111.152 523.203 109.792 525.623 107.373C528.042 104.954 529.401 101.672 529.401 98.2504C529.401 94.8288 528.042 91.5474 525.623 89.1279C523.203 86.7085 519.922 85.3493 516.5 85.3493V85.3493Z" fill="black" />
                    <path id="Vector_42" opacity="0.1" d="M455.141 85.3493C455.299 85.3493 455.456 85.3555 455.613 85.3612C452.276 85.4825 449.116 86.8936 446.797 89.2975C444.479 91.7015 443.184 94.9109 443.184 98.2504C443.184 101.59 444.479 104.799 446.797 107.203C449.116 109.607 452.276 111.018 455.613 111.14C455.456 111.145 455.299 111.152 455.141 111.152C451.721 111.149 448.443 109.788 446.026 107.369C443.609 104.95 442.251 101.67 442.251 98.2504C442.251 94.8308 443.609 91.5511 446.026 89.1319C448.443 86.7128 451.721 85.3523 455.141 85.3493Z" fill="black" />
                    <path id="Vector_43" opacity="0.1" d="M497.601 120.275C495.429 121.912 492.784 122.798 490.065 122.799H474.969C472.25 122.798 469.605 121.912 467.433 120.275H497.601Z" fill="black" />
                    <path id="Vector_44" d="M595.086 213.756C595.086 213.756 598.338 223.128 601.315 220.632L598.942 208.382L595.086 213.756Z" fill="#FBBEBE" />
                    <path id="Vector_45" d="M464.946 421.116C474.335 421.116 481.946 411.266 481.946 399.116C481.946 386.965 474.335 377.116 464.946 377.116C455.557 377.116 447.946 386.965 447.946 399.116C447.946 411.266 455.557 421.116 464.946 421.116Z" fill="#2F2E41" />
                    <path id="Vector_46" d="M557.446 421.616C566.835 421.616 574.446 411.766 574.446 399.616C574.446 387.465 566.835 377.616 557.446 377.616C548.057 377.616 540.446 387.465 540.446 399.616C540.446 411.766 548.057 421.616 557.446 421.616Z" fill="#2F2E41" />
                    <path id="Vector_47" d="M544.446 464.616C544.446 474.556 530.566 482.616 513.446 482.616C496.326 482.616 482.446 474.556 482.446 464.616C482.446 456.006 492.856 448.806 506.766 447.046C508.981 446.753 511.212 446.61 513.446 446.616C517.189 446.603 520.922 447.006 524.576 447.816C536.196 450.406 544.446 456.956 544.446 464.616Z" fill="#2F2E41" />
                    <path id="Vector_48" d="M468.946 416.116C478.335 416.116 485.946 406.266 485.946 394.116C485.946 381.965 478.335 372.116 468.946 372.116C459.557 372.116 451.946 381.965 451.946 394.116C451.946 406.266 459.557 416.116 468.946 416.116Z" stroke="#3F3D56" strokeMiterlimit="10" />
                    <path id="Vector_49" d="M561.446 416.616C570.835 416.616 578.446 406.766 578.446 394.616C578.446 382.465 570.835 372.616 561.446 372.616C552.057 372.616 544.446 382.465 544.446 394.616C544.446 406.766 552.057 416.616 561.446 416.616Z" stroke="#3F3D56" strokeMiterlimit="10" />
                    <path id="Vector_50" d="M517.446 477.616C534.567 477.616 548.446 469.557 548.446 459.616C548.446 449.674 534.567 441.616 517.446 441.616C500.325 441.616 486.446 449.674 486.446 459.616C486.446 469.557 500.325 477.616 517.446 477.616Z" stroke="#3F3D56" strokeMiterlimit="10" />
                    <path id="Vector_51" d="M524.946 449.316C524.954 450.573 524.482 451.786 523.626 452.708C523.222 453.149 522.73 453.502 522.183 453.744C521.636 453.986 521.044 454.113 520.446 454.116H510.446C509.214 454.073 508.049 453.544 507.205 452.644C506.362 451.745 505.909 450.548 505.946 449.316C505.941 448.341 506.226 447.386 506.766 446.574C508.979 446.263 511.211 446.109 513.446 446.116C517.193 446.103 520.929 446.533 524.576 447.396C524.823 448.005 524.948 448.658 524.946 449.316V449.316Z" fill="white" />
                    <path id="Vector_52" d="M468.946 393.116C471.707 393.116 473.946 390.877 473.946 388.116C473.946 385.354 471.707 383.116 468.946 383.116C466.185 383.116 463.946 385.354 463.946 388.116C463.946 390.877 466.185 393.116 468.946 393.116Z" fill="white" />
                    <path id="Vector_53" d="M561.946 393.116C564.707 393.116 566.946 390.877 566.946 388.116C566.946 385.354 564.707 383.116 561.946 383.116C559.185 383.116 556.946 385.354 556.946 388.116C556.946 390.877 559.185 393.116 561.946 393.116Z" fill="white" />
                    <path id="Vector_54" opacity="0.3" d="M566.946 440.116C569.707 440.116 571.946 437.877 571.946 435.116C571.946 432.354 569.707 430.116 566.946 430.116C564.185 430.116 561.946 432.354 561.946 435.116C561.946 437.877 564.185 440.116 566.946 440.116Z" fill="#6C63FF" />
                    <path id="Vector_55" opacity="0.3" d="M444.946 440.116C447.707 440.116 449.946 437.877 449.946 435.116C449.946 432.354 447.707 430.116 444.946 430.116C442.185 430.116 439.946 432.354 439.946 435.116C439.946 437.877 442.185 440.116 444.946 440.116Z" fill="#6C63FF" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="1058" height="785" fill="white" />
                </clipPath>
                <clipPath id="clip1">
                    <rect width="1074.39" height="584.231" fill="white" transform="translate(-16 80)" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default NotFoundSvg;
