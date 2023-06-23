const Logo = ({ className, fill }) => {
  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 708 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M230.258 43.7469C227.637 42.24 224.492 41.4537 220.758 41.4537C217.285 41.4537 214.14 42.0434 211.388 43.0917C208.637 44.1401 206.409 45.7125 204.836 47.7437C203.264 49.7748 202.478 52.199 202.478 54.9509C202.478 58.9476 203.985 62.2891 207.13 64.9099C210.209 67.5307 214.468 69.1032 219.906 69.6273C223.837 70.0205 226.72 71.1343 228.686 72.9033C230.586 74.6724 231.569 76.769 231.569 79.2588C231.569 81.8796 230.389 83.9762 228.162 85.4832C225.868 86.9901 223.116 87.7109 219.84 87.7109C217.023 87.7109 214.468 87.1212 212.175 85.9418C209.816 84.7625 208.309 83.321 207.523 81.6175C207.195 80.9623 206.736 80.3726 206.081 79.9795C205.426 79.5864 204.771 79.3243 204.116 79.3243C203.788 79.3243 203.592 79.3898 203.46 79.3898C202.609 79.5864 201.954 79.914 201.495 80.4381C200.971 80.9623 200.774 81.4865 200.774 82.1417C200.774 82.5348 200.84 82.9279 201.102 83.4521C202.412 86.597 204.771 89.0868 208.243 90.9869C211.716 92.9525 215.582 93.8697 219.84 93.8697C223.051 93.8697 226.065 93.3456 228.882 92.2317C231.7 91.1179 233.993 89.4144 235.696 87.1867C237.4 84.959 238.252 82.2072 238.252 79.0622C238.252 74.7379 236.81 71.2653 233.927 68.6445C231.044 66.0237 226.982 64.3857 221.741 63.8616C217.023 63.4029 213.747 62.4201 211.913 60.8477C210.078 59.3407 209.161 57.4406 209.161 55.1474C209.161 52.7232 210.144 50.8886 212.24 49.5782C214.271 48.2678 216.958 47.6126 220.299 47.6126C222.985 47.6126 225.213 48.1368 226.982 49.1851C228.751 50.2334 230.258 51.6749 231.438 53.6405C231.7 54.2301 232.158 54.6888 232.748 55.0164C233.272 55.344 233.927 55.475 234.582 55.475C235.238 55.475 235.762 55.344 236.286 55.0164C237.138 54.4267 237.596 53.6405 237.596 52.6577C237.596 51.9369 237.334 51.1507 236.81 50.2989C234.976 47.4816 232.813 45.3194 230.258 43.7469Z"
          fill={fill ? fill : "#424299"}
        />
        <path
          d="M282.292 64.7788C280.916 62.2891 279.016 60.3235 276.657 59.0131C274.364 57.8337 271.874 57.1785 269.123 57.113C269.057 57.113 268.926 57.0475 268.926 57.0475H253.856C252.939 57.0475 252.218 57.3751 251.629 57.9648C250.974 58.62 250.711 59.3407 250.711 60.1924C250.711 60.258 250.711 60.389 250.711 60.4545C250.711 60.5856 250.711 60.6511 250.711 60.7166V89.9385C250.711 90.9213 250.974 91.7076 251.629 92.3628C252.284 93.018 253.07 93.28 254.053 93.28C255.036 93.28 255.822 93.018 256.477 92.3628C257.067 91.7076 257.394 90.9213 257.394 89.9385V71.4619C257.394 69.8894 257.788 68.5135 258.639 67.2031C259.491 65.9582 260.67 64.9754 262.177 64.1892C263.684 63.4684 265.388 63.0753 267.222 63.0753C270.367 63.0753 272.857 63.9926 274.757 65.8272C276.657 67.6617 277.64 70.348 277.64 73.8206V89.9385C277.64 90.9213 277.902 91.7076 278.557 92.3628C279.213 93.018 279.999 93.28 280.982 93.28C281.899 93.28 282.685 93.018 283.34 92.3628C283.996 91.7076 284.323 90.9213 284.323 89.9385V73.8206C284.323 70.2825 283.602 67.2686 282.292 64.7788Z"
          fill={fill ? fill : "#3F499C"}
        />
        <path
          d="M332.369 75.3276C332.369 71.9861 331.518 68.8411 329.945 66.0893C328.373 63.3374 326.21 61.1098 323.459 59.5373C320.707 57.9648 317.693 57.113 314.351 57.113C310.944 57.113 307.865 57.9648 305.113 59.5373C302.361 61.1098 300.199 63.3374 298.627 66.0893C297.054 68.8411 296.268 71.9206 296.268 75.3276C296.268 78.7346 296.989 81.8796 298.43 84.6314C299.871 87.3833 301.903 89.5454 304.458 91.1179C307.079 92.7559 309.896 93.5422 313.041 93.5422H313.565H329.224C330.076 93.5422 330.797 93.2146 331.452 92.6249C332.042 92.0352 332.369 91.3145 332.369 90.3972V89.9386V75.3276ZM304.196 81.6175C303.147 79.783 302.689 77.6863 302.689 75.3276C302.689 73.0344 303.147 70.9378 304.196 69.0377C305.244 67.2031 306.62 65.6962 308.389 64.6478C310.158 63.5995 312.124 63.0098 314.351 63.0098C316.514 63.0098 318.479 63.5995 320.248 64.6478C322.017 65.6962 323.393 67.2031 324.441 69.0377C325.424 70.9378 325.948 73.0344 325.948 75.3276C325.948 77.6863 325.424 79.783 324.441 81.6175C323.393 83.4521 322.017 84.959 320.248 86.0074C318.479 87.0557 316.514 87.5798 314.351 87.5798C312.124 87.5798 310.158 87.0557 308.389 86.0074C306.62 84.959 305.244 83.4521 304.196 81.6175Z"
          fill={fill ? fill : "#3C50A0"}
        />
        <path
          d="M381.211 75.3276C381.211 71.9206 380.425 68.8411 378.852 66.0893C377.28 63.3374 375.052 61.1098 372.3 59.5373C369.549 57.9648 366.469 57.113 363.128 57.113H362.866H362.734H348.255C347.337 57.113 346.617 57.4406 346.027 58.0303C345.372 58.6855 345.11 59.4062 345.11 60.258V74.2138V75.3276V105.205C345.11 106.253 345.372 107.039 346.027 107.629C346.617 108.284 347.403 108.546 348.451 108.546C349.368 108.546 350.155 108.284 350.81 107.629C351.465 107.039 351.793 106.253 351.793 105.205V87.5143C353.3 89.4144 355.134 90.8558 357.362 91.9042C359.524 92.9525 361.883 93.4766 364.438 93.4766C367.583 93.4766 370.4 92.6904 372.956 91.1179C375.511 89.5454 377.542 87.3833 378.983 84.6314C380.425 81.8796 381.211 78.7346 381.211 75.3276ZM374.79 75.3276C374.79 77.6863 374.266 79.783 373.218 81.6175C372.169 83.4521 370.793 84.959 369.024 86.0074C367.255 87.0557 365.29 87.5798 363.128 87.5798C360.9 87.5798 358.934 87.0557 357.165 86.0074C355.396 84.959 354.02 83.4521 353.038 81.6175C351.989 79.783 351.531 77.6863 351.531 75.3276C351.531 73.0344 351.989 70.9378 353.038 69.0377C354.02 67.2031 355.396 65.6962 357.165 64.6478C358.934 63.5995 360.9 63.0098 363.128 63.0098C365.29 63.0098 367.255 63.5995 369.024 64.6478C370.793 65.6962 372.169 67.2031 373.218 69.0377C374.266 70.9378 374.79 73.0344 374.79 75.3276Z"
          fill={fill ? fill : "#3856A3"}
        />
        <path
          d="M444.817 43.0263C444.097 42.3711 443.31 42.0435 442.393 42.109C441.083 42.109 440.1 42.6987 439.379 43.8125C439.379 43.878 439.379 43.878 439.379 43.9435C439.314 43.9435 439.314 44.0091 439.314 44.0091L422.147 79.3243C421.82 80.0451 421.23 80.3727 420.378 80.4382C419.592 80.4382 419.002 80.0451 418.609 79.3243L400.984 43.9435L400.919 43.878C400.198 42.6987 399.215 42.0435 397.971 42.0435C396.988 42.0435 396.201 42.3711 395.546 43.0263C394.891 43.6815 394.563 44.5332 394.563 45.4505V89.8075C394.563 90.7903 394.891 91.5766 395.546 92.2318C396.201 92.887 396.988 93.2146 397.971 93.2146C398.888 93.2146 399.74 92.887 400.395 92.2318C401.05 91.5766 401.378 90.7903 401.378 89.8075V66.2203C401.378 65.172 401.836 64.5823 402.884 64.3203C403.867 64.0582 404.588 64.4513 405.112 65.3686L417.037 89.2179C417.692 90.5938 418.74 91.249 420.182 91.249C421.361 91.249 422.278 90.7248 422.999 89.6765C423.065 89.611 423.13 89.5455 423.13 89.4799L435.186 64.9099C435.645 63.9271 436.431 63.5995 437.414 63.8616C438.462 64.0582 438.986 64.7134 438.986 65.7617V89.8075C438.986 90.7903 439.314 91.5766 439.969 92.2318C440.624 92.887 441.41 93.2146 442.393 93.2146C443.31 93.2146 444.097 92.887 444.752 92.2318C445.407 91.5766 445.8 90.7903 445.8 89.8075V45.4505C445.8 44.5332 445.473 43.6815 444.817 43.0263Z"
          fill={fill ? fill : "#355DA7"}
        />
        <path
          d="M492.325 76.8346C492.849 76.3104 493.177 75.5897 493.177 74.7379C493.177 71.3309 492.522 68.2514 491.211 65.5651C489.901 62.9443 488.001 60.8477 485.577 59.3407C483.087 57.8993 480.204 57.113 476.863 57.113C473.455 57.113 470.376 57.8993 467.69 59.4718C465.003 61.0442 462.907 63.2064 461.4 65.9582C459.893 68.7101 459.172 71.855 459.172 75.3276C459.172 78.8657 459.958 81.9451 461.531 84.697C463.103 87.4488 465.331 89.611 468.214 91.1834C471.031 92.7559 474.242 93.4766 477.845 93.4766C479.811 93.4766 481.908 93.149 484.135 92.3628C486.363 91.6421 488.197 90.6593 489.704 89.4799C490.36 88.9558 490.753 88.3006 490.753 87.5143C490.753 86.7281 490.36 85.9418 489.573 85.2866C489.049 84.8935 488.394 84.6314 487.608 84.6314C486.756 84.6314 486.035 84.8935 485.446 85.3522C484.528 86.0729 483.349 86.6626 481.908 87.1212C480.466 87.6454 479.156 87.8419 477.845 87.8419C474.504 87.8419 471.686 86.9246 469.393 85.0246C467.1 83.19 465.724 80.7002 465.265 77.6208H490.163C491.015 77.6208 491.736 77.3587 492.325 76.8346ZM469.066 65.3686C471.031 63.665 473.652 62.7478 476.863 62.7478C479.745 62.7478 482.039 63.665 483.873 65.3686C485.642 67.1376 486.756 69.4963 487.149 72.3792H465.331C465.855 69.4963 467.1 67.1376 469.066 65.3686Z"
          fill={fill ? fill : "#3264AA"}
        />
        <path
          d="M524.611 58.489C522.383 57.5717 519.828 57.113 517.011 57.113C514.652 57.113 512.49 57.5062 510.459 58.2269C508.362 59.0131 506.724 60.127 505.479 61.5684C504.169 63.0754 503.579 64.9099 503.579 67.0066C503.579 72.3137 507.772 75.7862 516.159 77.3587C519.369 78.0139 521.662 78.7346 523.038 79.6519C524.349 80.5692 525.07 81.683 525.07 82.9934C525.07 84.4349 524.349 85.5487 522.973 86.335C521.597 87.1867 519.697 87.5798 517.207 87.5798C515.307 87.5798 513.538 87.2522 511.9 86.597C510.196 85.9418 508.952 85.0901 508.165 84.1728C507.379 83.3866 506.527 82.9934 505.676 82.9934C504.955 82.9934 504.169 83.321 503.382 83.9107C502.465 84.5659 502.072 85.4177 502.072 86.466C502.072 87.2522 502.334 87.973 502.924 88.4971C504.365 90.0041 506.462 91.1834 509.083 92.1007C511.703 93.018 514.455 93.4766 517.469 93.4766C520.418 93.4766 522.973 93.018 525.07 92.1007C527.166 91.1834 528.804 89.873 529.918 88.235C530.966 86.597 531.556 84.7625 531.556 82.7314C531.556 80.045 530.508 77.8174 528.542 76.1138C526.577 74.4103 523.169 73.0999 518.452 72.1171C516.093 71.6585 514.324 71.1998 513.145 70.6757C511.9 70.1515 511.048 69.6274 510.655 69.0377C510.197 68.448 510 67.7273 510 66.81C510 65.6306 510.59 64.6478 511.9 63.9926C513.21 63.3374 514.848 62.9443 516.88 62.9443C518.583 62.9443 520.09 63.2064 521.335 63.5995C522.514 63.9926 523.694 64.7134 524.807 65.6962C525.725 66.5479 526.708 66.941 527.887 66.941C528.608 66.941 529.197 66.81 529.721 66.4169C530.442 65.8272 530.835 65.172 530.835 64.3858C530.835 63.7306 530.508 63.0098 529.984 62.2891C528.673 60.7166 526.839 59.4062 524.611 58.489Z"
          fill={fill ? fill : "#2F6BAD"}
        />
        <path
          d="M562.916 58.489C560.688 57.5717 558.133 57.113 555.316 57.113C552.957 57.113 550.795 57.5062 548.764 58.2269C546.667 59.0131 545.029 60.127 543.784 61.5684C542.474 63.0754 541.884 64.9099 541.884 67.0066C541.884 72.3137 546.077 75.7862 554.464 77.3587C557.674 78.0139 559.968 78.7346 561.344 79.6519C562.654 80.5692 563.375 81.683 563.375 82.9934C563.375 84.4349 562.654 85.5487 561.278 86.335C559.902 87.1867 558.002 87.5798 555.512 87.5798C553.612 87.5798 551.843 87.2522 550.205 86.597C548.502 85.9418 547.257 85.0901 546.471 84.1728C545.684 83.3866 544.833 82.9934 543.981 82.9934C543.26 82.9934 542.474 83.321 541.688 83.9107C540.77 84.5659 540.377 85.4177 540.377 86.466C540.377 87.2522 540.639 87.973 541.229 88.4971C542.67 90.0041 544.767 91.1834 547.388 92.1007C550.009 93.018 552.76 93.4766 555.774 93.4766C558.723 93.4766 561.278 93.018 563.375 92.1007C565.471 91.1834 567.109 89.873 568.223 88.235C569.271 86.597 569.861 84.7625 569.861 82.7314C569.861 80.045 568.813 77.8174 566.847 76.1138C564.882 74.4103 561.475 73.0999 556.757 72.1171C554.398 71.6585 552.629 71.1998 551.45 70.6757C550.205 70.1515 549.353 69.6274 548.96 69.0377C548.502 68.448 548.305 67.7273 548.305 66.81C548.305 65.6306 548.895 64.6478 550.205 63.9926C551.516 63.3374 553.154 62.9443 555.185 62.9443C556.888 62.9443 558.395 63.2064 559.64 63.5995C560.819 63.9926 561.999 64.7134 563.113 65.6962C564.03 66.5479 565.013 66.941 566.192 66.941C566.913 66.941 567.503 66.81 568.027 66.4169C568.747 65.8272 569.14 65.172 569.14 64.3858C569.14 63.7306 568.813 63.0098 568.289 62.2891C566.978 60.7166 565.144 59.4062 562.916 58.489Z"
          fill={fill ? fill : "#2C72B1"}
        />
        <path
          d="M615.308 75.3276C615.308 71.9861 614.457 68.8411 612.884 66.0893C611.312 63.3374 609.149 61.1098 606.398 59.5373C603.646 57.9648 600.632 57.113 597.29 57.113C593.883 57.113 590.804 57.9648 588.052 59.5373C585.3 61.1098 583.138 63.3374 581.566 66.0893C579.993 68.8411 579.207 71.9206 579.207 75.3276C579.207 78.7346 579.928 81.8796 581.369 84.6314C582.81 87.3833 584.841 89.5454 587.397 91.1179C590.018 92.7559 592.835 93.5422 595.98 93.5422H596.504H612.163C613.015 93.5422 613.736 93.2146 614.391 92.6249C614.981 92.0352 615.308 91.3145 615.308 90.3972V89.9386V75.3276ZM587.135 81.6175C586.086 79.783 585.628 77.6863 585.628 75.3276C585.628 73.0344 586.086 70.9378 587.135 69.0377C588.183 67.2031 589.559 65.6962 591.328 64.6478C593.097 63.5995 595.063 63.0098 597.29 63.0098C599.452 63.0098 601.418 63.5995 603.187 64.6478C604.956 65.6962 606.332 67.2031 607.38 69.0377C608.363 70.9378 608.887 73.0344 608.887 75.3276C608.887 77.6863 608.363 79.783 607.38 81.6175C606.332 83.4521 604.956 84.959 603.187 86.0074C601.418 87.0557 599.452 87.5798 597.29 87.5798C595.063 87.5798 593.097 87.0557 591.328 86.0074C589.559 84.959 588.183 83.4521 587.135 81.6175Z"
          fill={fill ? fill : "#2878B4"}
        />
        <path
          d="M653.536 59.4718C650.784 57.8993 647.704 57.113 644.297 57.113C640.759 57.113 637.68 57.8993 634.928 59.4718C632.176 61.0442 630.014 63.1409 628.507 65.8927C626.935 68.6446 626.214 71.7895 626.214 75.3276C626.214 78.8657 626.869 81.9451 628.311 84.697C629.752 87.4488 631.718 89.611 634.273 91.1834C636.828 92.7559 639.711 93.4766 642.987 93.4766C645.739 93.4766 648.294 92.8214 650.522 91.4455C652.749 90.1351 654.519 88.235 655.894 85.8108V89.0213C655.894 91.7731 655.37 94.1974 654.322 96.163C653.274 98.1286 651.832 99.6355 650.129 100.684C648.36 101.732 646.394 102.191 644.297 102.191C642.004 102.191 639.973 101.798 638.204 101.011C636.369 100.225 634.928 99.0458 633.749 97.4734C633.028 96.5561 632.111 96.0974 631.062 96.0974C630.407 96.0974 629.817 96.294 629.228 96.6871C628.311 97.3423 627.852 98.1286 627.852 99.0458C627.852 99.701 628.048 100.291 628.573 100.88C630.407 103.239 632.635 105.008 635.387 106.253C638.073 107.498 641.021 108.088 644.166 108.088C647.639 108.088 650.784 107.301 653.536 105.663C656.288 104.025 658.45 101.798 660.022 98.9148C661.529 96.0974 662.315 92.9525 662.315 89.4799V75.3276C662.315 71.7895 661.529 68.6446 659.957 65.8927C658.384 63.1409 656.288 61.0442 653.536 59.4718ZM650.26 86.0074C648.491 87.0557 646.525 87.5798 644.297 87.5798C642.07 87.5798 640.039 87.0557 638.27 86.0074C636.501 84.959 635.125 83.5176 634.142 81.683C633.093 79.8485 632.635 77.6863 632.635 75.3276C632.635 72.9689 633.093 70.8722 634.142 68.9722C635.125 67.1376 636.501 65.6306 638.27 64.5823C640.039 63.534 642.07 63.0098 644.297 63.0098C646.525 63.0098 648.491 63.534 650.26 64.5823C652.029 65.6306 653.405 67.1376 654.387 68.9722C655.37 70.8722 655.894 72.9689 655.894 75.3276C655.894 77.6863 655.37 79.8485 654.387 81.683C653.405 83.5176 652.029 84.959 650.26 86.0074Z"
          fill={fill ? fill : "#257FB8"}
        />
        <path
          d="M706.374 76.8346C706.898 76.3104 707.226 75.5897 707.226 74.7379C707.226 71.3309 706.571 68.2514 705.26 65.5651C703.95 62.9443 702.05 60.8477 699.626 59.3407C697.136 57.8993 694.253 57.113 690.912 57.113C687.505 57.113 684.425 57.8993 681.739 59.4718C679.052 61.0442 676.956 63.2064 675.449 65.9582C673.942 68.7101 673.221 71.855 673.221 75.3276C673.221 78.8657 674.007 81.9451 675.58 84.697C677.152 87.4488 679.38 89.611 682.263 91.1834C685.08 92.7559 688.291 93.4766 691.894 93.4766C693.86 93.4766 695.957 93.149 698.184 92.3628C700.412 91.6421 702.247 90.6593 703.754 89.4799C704.409 88.9558 704.802 88.3006 704.802 87.5143C704.802 86.7281 704.409 85.9418 703.622 85.2866C703.098 84.8935 702.443 84.6314 701.657 84.6314C700.805 84.6314 700.084 84.8935 699.495 85.3522C698.577 86.0729 697.398 86.6626 695.957 87.1212C694.515 87.6454 693.205 87.8419 691.894 87.8419C688.553 87.8419 685.735 86.9246 683.442 85.0246C681.149 83.19 679.773 80.7002 679.315 77.6208H704.212C705.064 77.6208 705.785 77.3587 706.374 76.8346ZM683.115 65.3686C685.08 63.665 687.701 62.7478 690.912 62.7478C693.794 62.7478 696.088 63.665 697.922 65.3686C699.691 67.1376 700.805 69.4963 701.198 72.3792H679.38C679.904 69.4963 681.149 67.1376 683.115 65.3686Z"
          fill={fill ? fill : "#2286BB"}
        />
        <rect width="150" height="150" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_333_18" transform="scale(0.005)" />
          </pattern>
          {fill ? (
            <image
              xlinkHref="data:image/png;base64,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"
              id="image0_333_18"
              width="200"
              height="200"
            ></image>
          ) : (
            <image
              id="image0_333_18"
              width="200"
              height="200"
              xlinkHref="data:image/png;base64,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"
            />
          )}
        </defs>
      </svg>
    </div>
  );
};

export default Logo;