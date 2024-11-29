import * as React from "react";
import { motion } from 'framer-motion'
const SmartSolution = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width='100%'
    height={562}
    viewBox="0 0 720 562"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_76_2317)">
      <motion.path
      initial={{ scale: 0 }}
      whileInView={{scale: 1 }}
      viewport={{
        once: true
      }}
     
      transition={{
        duration: 1,
        ease: 'easeInOut',     // Infinite loop
        repeatType: 'mirror',   // "mirror" makes the animation reverse after each cycle
      }}
        opacity={0.2}
        d="M658.489 322.155C663.729 269.763 694.946 220.208 689.488 167.598C686.76 141.402 674.971 116.952 660.672 94.9033C627.272 43.4932 573.134 -0.385478 511.791 1.03348C463.655 2.12499 419.995 30.7225 372.187 36.1801C293.489 45.2396 207.041 -16.2124 131.836 23.6277C76.8244 52.6618 19.7354 122.421 5 183C-0.784999 206.795 -2.42228 232.445 5.87319 255.476C14.9327 280.472 34.7982 300.119 55.8643 316.492C91.6658 344.434 147.554 348.788 178.226 382.188C205.513 411.768 223.196 449.425 252.012 477.586C283.447 508.367 325.689 525.722 368.039 537.51C424.033 553.119 482.211 560.214 540.279 562.069C583.066 563.379 631.857 559.013 658.053 525.285C678.355 499.198 678.792 462.851 673.225 430.215C667.549 397.688 656.743 365.488 657.835 332.525C657.835 329.032 658.162 325.539 658.489 322.155Z"
        fill="#E2E6EB"
      />
      <motion.path
      initial={{ x: -100 }}
      whileInView={{x: 0}}
      viewport={{
        once: true
      }}
     
      transition={{
        duration: 2,
        ease: 'easeInOut',     // Infinite loop
        repeatType: 'mirror',   // "mirror" makes the animation reverse after each cycle
      }}
        d="M602.495 153.845H413.009C403.605 153.845 395.982 161.468 395.982 170.872V314.515C395.982 323.919 403.605 331.542 413.009 331.542H602.495C611.899 331.542 619.523 323.919 619.523 314.515V170.872C619.523 161.468 611.899 153.845 602.495 153.845Z"
        fill="#E3E6EB"
      />
      <path
        d="M544.427 207.984H554.36C556.543 207.984 558.398 209.73 558.398 212.022V308.839C558.398 311.022 556.652 312.878 554.36 312.878H544.427V208.093V207.984Z"
        fill="white"
      />
      <path
        d="M597.911 200.125H580.01C578.081 200.125 576.518 201.689 576.518 203.618V309.276C576.518 311.205 578.081 312.769 580.01 312.769H597.911C599.84 312.769 601.404 311.205 601.404 309.276V203.618C601.404 201.689 599.84 200.125 597.911 200.125Z"
        fill="white"
      />
      <motion.path
      initial={{ x: 50 }}
      whileInView={{x: 0}}
      viewport={{
        once: true
      }}
     
      transition={{
        duration: 2,
        ease: 'easeInOut',     // Infinite loop
        repeatType: 'mirror',   // "mirror" makes the animation reverse after each cycle
      }}
        d="M93.3064 142.93V215.515H20.721C21.2668 175.784 53.5754 143.475 93.3064 142.93Z"
        fill="#FECE32"
      />
      <motion.path
      initial={{ x: 50 }}
      whileInView={{x: 0}}
      viewport={{
        once: true
      }}
     
      transition={{
        duration: 2,
        ease: 'easeInOut',     // Infinite loop
        repeatType: 'mirror',   // "mirror" makes the animation reverse after each cycle
      }}
        d="M127.034 243.13H114.482L145.699 274.347C132.382 287.227 114.263 295.195 94.3979 295.195C54.1212 295.195 21.2668 262.668 20.721 222.61H65.2546H100.401V216.388V143.039C140.569 143.585 172.987 176.439 172.987 216.716C172.987 256.992 165.018 254.7 152.139 268.017L127.143 243.021V243.239L127.034 243.13Z"
        fill="#FFC300"
      />
      <path
        d="M528.054 95.8856H155.632C146.227 95.8856 138.604 103.509 138.604 112.913V353.263C138.604 362.668 146.227 370.291 155.632 370.291H528.054C537.459 370.291 545.082 362.668 545.082 353.263V112.913C545.082 103.509 537.459 95.8856 528.054 95.8856Z"
        fill="#E2E6EB"
      />
      <motion.path
      initial={{ scale: 0.9 }}
      whileInView={{scale: 1}}
      viewport={{
        once: false
      }}
     
      transition={{
        duration: 2,
        ease: 'easeInOut', 
        repeat: Infinity,    // Infinite loop
        repeatType: 'mirror',   // "mirror" makes the animation reverse after each cycle
      }}
        d="M303.531 302.836H159.343C158.469 302.836 157.705 303.6 157.705 304.473V308.402C157.705 309.276 158.469 310.04 159.343 310.04H303.531C304.404 310.04 305.168 309.276 305.168 308.402V304.473C305.168 303.6 304.404 302.836 303.531 302.836ZM291.743 324.339H147.554C146.681 324.339 145.917 325.103 145.917 325.976V329.905C145.917 330.778 146.681 331.542 147.554 331.542H291.743C292.616 331.542 293.38 330.778 293.38 329.905V325.976C293.38 325.103 292.616 324.339 291.743 324.339ZM314.555 344.531H216.647C215.774 344.531 215.01 345.296 215.01 346.169V350.098C215.01 350.971 215.774 351.735 216.647 351.735H314.555C315.428 351.735 316.193 350.971 316.193 350.098V346.169C316.193 345.296 315.428 344.531 314.555 344.531Z"
        fill="#022345"
      />
      <path
        d="M375.243 127.976H231.164C230.26 127.976 229.527 128.709 229.527 129.613V140.528C229.527 141.433 230.26 142.166 231.164 142.166H375.243C376.147 142.166 376.88 141.433 376.88 140.528V129.613C376.88 128.709 376.147 127.976 375.243 127.976Z"
        fill="#012243"
      />
      <path
        d="M416.721 127.976H389.433C388.529 127.976 387.796 128.709 387.796 129.613V140.528C387.796 141.433 388.529 142.166 389.433 142.166H416.721C417.625 142.166 418.358 141.433 418.358 140.528V129.613C418.358 128.709 417.625 127.976 416.721 127.976Z"
        fill="#012243"
      />
      <path
        d="M507.753 156.792C507.316 156.028 506.661 155.591 505.897 155.373L473.807 149.37C472.278 149.042 470.859 150.024 470.641 151.553C470.423 153.081 471.296 154.5 472.824 154.718L497.383 159.411L410.826 205.255L356.688 191.611C356.033 191.393 355.269 191.611 354.614 191.938L273.733 238.328L223.633 201.762C222.432 200.889 220.686 201.107 219.812 202.308C218.939 203.508 219.157 205.255 220.358 206.128L271.877 243.676C272.314 244.003 272.969 244.222 273.515 244.222C274.06 244.222 274.497 244.113 274.824 243.894L356.251 197.178L410.281 210.822C410.936 211.04 411.591 210.822 412.245 210.603L499.457 164.432L489.306 187.354C488.651 188.773 489.306 190.301 490.725 190.956C491.052 191.065 491.489 191.174 491.816 191.174C492.908 191.174 493.89 190.52 494.327 189.537L507.643 159.302C507.971 158.538 507.971 157.665 507.643 156.901L507.753 156.792Z"
        fill="#022345"
      />
      <path
        d="M280.282 241.275C280.282 237.564 277.335 234.616 273.624 234.616C269.913 234.616 266.966 237.564 266.966 241.275C266.966 244.986 269.913 247.933 273.624 247.933C277.335 247.933 280.282 244.986 280.282 241.275Z"
        fill="#14A9A2"
      />
      <path
        d="M230.072 203.727C230.072 199.361 226.58 195.868 222.214 195.868C217.848 195.868 214.355 199.361 214.355 203.727C214.355 208.093 217.848 211.586 222.214 211.586C226.58 211.586 230.072 208.093 230.072 203.727Z"
        fill="#14A9A2"
      />
      <path
        d="M227.016 203.727C227.016 200.998 224.833 198.924 222.214 198.924C219.594 198.924 217.411 201.107 217.411 203.727C217.411 206.346 219.594 208.529 222.214 208.529C224.833 208.529 227.016 206.346 227.016 203.727Z"
        fill="white"
      />
      <path
        d="M362.691 194.012C362.691 190.301 359.744 187.354 356.033 187.354C352.322 187.354 349.374 190.301 349.374 194.012C349.374 197.723 352.322 200.67 356.033 200.67C359.744 200.67 362.691 197.723 362.691 194.012Z"
        fill="#14A9A2"
      />
      <path
        d="M417.812 207.984C417.812 204.272 414.865 201.325 411.154 201.325C407.443 201.325 404.496 204.272 404.496 207.984C404.496 211.695 407.443 214.642 411.154 214.642C414.865 214.642 417.812 211.695 417.812 207.984Z"
        fill="#14A9A2"
      />
      <path
        d="M211.299 125.575V155.264C211.299 157.228 209.661 158.866 207.697 158.866H164.036C162.071 158.866 160.434 157.228 160.434 155.264V125.575C160.434 123.61 162.071 121.973 164.036 121.973H207.697C209.661 121.973 211.299 123.61 211.299 125.575Z"
        fill="#012243"
      />
      <path
        d="M187.942 139.655C192.518 138.574 195.35 133.987 194.269 129.411C193.187 124.836 188.601 122.003 184.025 123.085C179.449 124.166 176.616 128.753 177.698 133.329C178.78 137.905 183.366 140.737 187.942 139.655Z"
        fill="#14A9A2"
      />
      <path
        d="M185.866 143.912C175.715 143.912 167.092 148.715 164.036 159.63H207.697C204.64 148.715 196.017 143.912 185.866 143.912Z"
        fill="#14A9A2"
      />


      <path
        d="M722.452 446.697H635.241C633.603 446.697 632.185 447.242 632.185 448.88C632.185 450.517 633.494 451.063 635.241 451.063H722.452C724.09 451.063 725.509 450.517 725.509 448.88C725.509 447.242 724.199 446.697 722.452 446.697Z"
        fill="#012244"
      />
      <path
        d="M621.269 446.697H49.5368C48.6636 446.697 47.8995 446.369 47.3538 446.915C46.808 447.461 46.4806 447.679 46.4806 448.552C46.4806 450.19 47.7904 451.063 49.5368 451.063H621.269C622.143 451.063 622.907 450.954 623.452 450.408C623.998 449.862 624.326 449.862 624.326 448.989C624.326 447.352 623.016 446.697 621.269 446.697Z"
        fill="#012244"
      />
      <path
        d="M116.119 247.387L106.404 263.105C106.404 263.105 113.718 312.769 108.26 327.941L111.316 334.599C111.316 334.599 107.714 341.257 106.514 352.718L99.8554 362.432C99.8554 362.432 110.77 379.351 145.262 378.15C179.754 376.949 182.264 362.432 182.264 362.432L177.462 358.175L174.405 346.714V324.339L159.998 247.933L116.228 247.387H116.119Z"
        fill="#14A9A2"
      />
      <path
        d="M184.338 261.031C184.338 261.031 198.091 265.397 201.475 267.471C201.693 267.58 201.802 267.908 201.693 268.126L192.525 291.593L174.624 314.952L151.047 270.091L167.311 257.102L184.338 261.031Z"
        fill="white"
      />
      <path
        d="M104.986 362.76C104.986 362.76 86.2115 394.85 98.3273 411.223C98.3273 411.223 97.6724 434.884 89.8135 447H189.796C189.796 447 185.539 415.48 185.539 405.765C185.539 396.051 179.536 366.362 171.568 363.96L104.986 362.76Z"
        fill="#FFC300"
      />
      <path
        d="M167.092 254.591C167.092 254.591 181.173 255.028 186.521 258.302C187.613 258.957 188.268 260.267 188.049 261.577C187.613 263.76 185.211 264.851 183.247 263.76C179.972 261.904 174.624 260.049 167.747 261.795L167.092 254.482V254.591Z"
        fill="#F3B5A5"
      />
      <path
        d="M189.468 273.693C189.25 273.693 189.032 273.692 188.923 273.474C184.884 270.091 173.096 268.235 172.987 268.235C172.441 268.235 172.113 267.689 172.222 267.253C172.222 266.707 172.768 266.379 173.205 266.489C173.751 266.489 185.648 268.344 190.014 272.164C190.341 272.492 190.451 273.038 190.014 273.474C189.796 273.692 189.577 273.802 189.359 273.802L189.468 273.693Z"
        fill="#FF5733"
      />
      <path
        d="M239.459 274.02L223.305 268.999L224.178 266.161L240.442 271.182L243.607 273.692L239.459 274.02Z"
        fill="#FF5733"
      />
      <path
        d="M184.011 279.15C183.683 279.15 183.465 279.041 183.247 278.823C180.518 275.002 173.096 274.347 172.987 274.347C172.441 274.347 172.113 273.911 172.113 273.365C172.113 272.819 172.55 272.492 173.096 272.492C173.423 272.492 181.391 273.147 184.666 277.731C184.993 278.168 184.884 278.713 184.447 279.041C184.338 279.15 184.12 279.259 183.902 279.259L184.011 279.15Z"
        fill="#FF5733"
      />
      <path
        d="M204.64 281.224L210.098 264.306L214.9 264.96L219.157 261.358C219.157 261.358 223.96 259.503 223.96 264.96C223.96 264.96 228.217 265.615 226.361 270.418C226.361 270.418 229.963 272.274 227.016 276.421C227.016 276.421 228.872 277.622 222.759 283.734C216.647 289.847 210.644 294.649 210.644 294.649L204.64 281.333V281.224Z"
        fill="#F3B5A5"
      />
      <path
        d="M180.955 283.407C180.627 283.407 180.409 283.298 180.19 282.97C179.426 281.879 176.37 280.787 174.624 280.351C174.187 280.241 173.86 279.696 173.969 279.259C174.078 278.823 174.624 278.495 175.06 278.604C175.606 278.713 180.3 279.914 181.609 281.988C181.937 282.425 181.828 282.97 181.391 283.298C181.282 283.298 181.064 283.407 180.845 283.407H180.955Z"
        fill="#FF5733"
      />
      <path
        d="M200.383 283.734L204.095 281.115C204.422 280.896 204.968 280.787 205.295 281.115C207.151 282.206 212.39 286.572 211.953 299.561C211.953 300.216 207.151 303.818 207.151 303.818L200.493 283.844L200.383 283.734Z"
        fill="white"
      />
      <path
        d="M155.522 249.134C155.522 249.134 145.262 253.936 145.262 263.651C145.262 273.365 148.864 298.142 148.864 300.653C148.864 303.163 150.611 318.881 151.92 332.307C152.685 339.947 161.417 343.986 167.747 339.51C178.226 332.197 191.87 322.156 199.074 314.515L208.788 304.8C208.788 304.8 211.844 284.826 199.729 281.77L177.353 298.688C177.353 298.688 180.409 255.028 161.635 247.169L155.632 249.024L155.522 249.134Z"
        fill="#0F8F89"
      />
      <path
        d="M167.638 208.639C167.638 208.639 177.353 196.523 161.635 186.808C161.635 186.808 162.29 173.492 137.403 175.893C112.517 178.295 106.514 204.382 107.714 219.554C108.915 234.726 109.57 238.983 107.714 243.13C105.859 247.387 105.313 256.447 119.83 249.788C119.83 249.788 130.09 255.792 140.46 252.19C146.681 250.007 149.628 250.88 150.938 251.971C152.466 253.172 154.213 253.827 156.177 253.718C159.233 253.5 163.381 251.971 166.219 246.732C166.656 245.968 166.219 244.877 165.237 244.768C161.853 244.331 154.977 242.584 153.23 233.962C150.829 222.501 167.747 208.529 167.747 208.529L167.638 208.639Z"
        fill="#022346"
      />
      <path
        d="M171.24 219.117C171.24 224.684 169.93 230.141 167.42 235.162C166.437 237.018 164.473 238 162.508 237.673C162.071 237.673 161.526 237.454 161.089 237.127L159.888 236.472L159.452 241.93V243.13C148.428 238.328 150.829 225.011 150.829 225.011C147.773 221.955 148.864 215.297 149.628 211.913C150.065 210.276 151.811 209.293 153.448 209.839C155.086 210.385 156.286 211.586 156.286 211.586C160.107 209.948 163.818 206.783 165.783 205.037C166.656 204.272 168.075 204.491 168.511 205.582C169.166 206.892 169.712 208.748 170.258 210.712C170.913 213.441 171.24 216.279 171.24 219.117Z"
        fill="#F3B5A5"
      />
      <path
        opacity={0.3}
        d="M108.26 416.789L100.401 410.786C99.9646 410.459 99.4188 410.568 99.0913 410.895C98.7639 411.332 98.873 411.878 99.2005 412.205L107.059 418.317C107.168 418.427 107.387 418.536 107.605 418.536C107.823 418.536 108.151 418.427 108.369 418.208C108.697 417.772 108.587 417.226 108.26 416.898V416.789ZM117.21 422.247L112.954 419.846C112.517 419.627 111.971 419.846 111.753 420.173C111.535 420.61 111.753 421.155 112.08 421.374L116.337 423.775C116.446 423.775 116.665 423.884 116.774 423.884C117.101 423.884 117.429 423.775 117.538 423.448C117.756 423.011 117.538 422.465 117.21 422.247Z"
        fill="#3C3570"
      />
      <path
        d="M215.01 265.397L204.749 263.105C203.985 262.887 203.44 262.122 203.549 261.249C203.767 260.485 204.531 259.939 205.404 260.049L217.957 262.777L215.01 265.288V265.397Z"
        fill="#FF5733"
      />
      <path
        d="M162.508 237.673C162.071 237.673 161.526 237.454 161.089 237.127L159.888 236.472L159.452 241.93C157.378 240.401 154.867 237.127 154.54 230.032C154.54 230.905 155.413 234.507 162.617 237.673H162.508Z"
        fill="#F28887"
      />
      <path
        d="M402.64 267.362C402.64 267.362 403.841 252.845 397.837 247.387C392.489 242.475 387.031 236.69 385.067 231.233C384.63 230.032 383.43 229.268 382.229 229.268C380.264 229.268 378.845 231.124 379.173 232.979C379.937 236.69 381.356 242.366 383.32 244.986C383.32 244.986 372.405 251.644 370.55 254.7C370.55 254.7 369.131 259.83 374.043 265.506C375.352 267.034 377.645 267.362 379.282 266.27L380.264 265.615C380.264 265.615 381.465 268.017 385.067 268.017L390.852 274.457L402.64 267.471V267.362Z"
        fill="#F3B5A5"
      />
      <path
        d="M525.653 396.378L526.635 413.297C526.854 417.99 523.798 422.356 519.213 423.448C517.249 423.884 514.847 424.212 511.791 424.212L509.935 399.98L525.653 396.378Z"
        fill="#F3B5A5"
      />
      <path
        d="M526.854 388.519L527.4 397.142C527.4 398.015 526.963 398.779 526.199 399.107C524.998 399.762 522.488 400.308 517.685 399.98V387.864L526.745 388.519H526.854Z"
        fill="#F5CF75"
      />
      <path
        d="M521.396 267.908L528.6 388.301C528.6 389.174 528.273 390.047 527.618 390.593C525.871 392.012 522.16 394.632 517.794 395.068L495.418 304.8L521.505 267.798L521.396 267.908Z"
        fill="#E09717"
      />
      <path
        d="M392.38 282.534L390.633 278.604C389.542 275.985 390.524 273.038 392.926 271.509L400.239 267.143C403.186 265.397 407.006 266.598 408.316 269.654L411.154 275.875L392.38 282.534Z"
        fill="white"
      />
      <path
        d="M444.772 379.678C444.772 379.678 439.315 383.28 438.769 391.139C438.114 398.998 430 447 430 447H514.411L514.411 411.768L515.065 411.114C519.322 406.857 521.505 401.072 521.287 395.177L520.523 376.622L444.772 379.678Z"
        fill="#FF5733"
      />
      <path
        d="M475.335 208.639C475.335 208.639 462.018 205.473 465.62 187.463C467.585 177.53 475.335 176.439 480.356 176.876C482.648 177.094 484.831 178.185 486.141 180.041C487.669 182.115 490.834 184.298 496.401 180.15C503.714 174.693 518.231 177.749 517.03 193.467C517.03 193.467 524.889 198.269 522.488 206.237C522.488 206.237 531.547 211.04 518.886 227.412C506.224 243.785 507.425 243.785 507.425 243.785L501.422 244.44H486.905L480.246 219.554L475.444 208.639H475.335Z"
        fill="#022346"
      />
      <path
        d="M479.264 254.919L468.676 260.158C466.821 261.031 465.293 262.45 464.31 264.196L433.857 313.096L410.826 272.492C410.826 272.492 404.496 268.672 393.253 277.731C391.179 279.368 390.415 282.097 391.179 284.608C394.999 296.178 407.006 330.233 421.414 346.715L427.199 350.644C431.565 353.591 437.459 353.045 441.28 349.334L443.899 346.715C443.899 346.715 442.589 368.545 440.625 377.823C440.188 380.006 441.28 382.189 443.353 383.062C451.758 386.882 473.697 394.741 501.422 389.065C501.422 389.065 515.393 389.065 522.051 375.749C522.051 375.749 522.051 373.347 519.65 372.147C519.65 372.147 520.305 290.393 522.051 280.678C522.051 280.678 526.526 252.19 507.534 252.19C488.542 252.19 479.373 254.919 479.373 254.919H479.264Z"
        fill="#F1AC1D"
      />
      <path
        d="M506.224 243.676L505.569 246.077C497.056 244.877 481.993 249.679 481.993 249.679V241.82L480.356 242.584L478.827 243.349C476.535 244.549 473.697 243.567 472.606 241.275C469.331 234.616 468.786 226.976 471.078 219.881L475.007 208.202C475.116 207.765 475.662 207.547 476.099 207.765C480.901 210.712 484.285 210.385 485.813 210.058C486.25 209.948 486.686 210.276 486.686 210.822L486.359 218.462C486.359 219.881 487.887 220.754 488.978 219.99L489.743 219.444C494.545 212.786 497.601 220.645 497.601 220.645C498.256 229.159 493.344 231.56 493.344 231.56L491.926 240.947C491.707 242.366 492.799 243.676 494.327 243.676H506.115H506.224Z"
        fill="#F3B5A5"
      />
      <path
        d="M474.789 258.302C474.789 258.302 474.68 247.387 499.239 246.186C499.239 246.186 512.883 243.785 508.735 254.7C508.735 254.7 493.563 252.845 474.789 258.302Z"
        fill="#F5CF75"
      />
      <path
        d="M445.646 346.387C445.427 346.387 445.318 346.387 445.1 346.278C444.663 345.95 444.554 345.405 444.882 344.968L481.229 289.847C481.556 289.41 482.102 289.301 482.539 289.629C482.975 289.956 483.084 290.502 482.757 290.938L446.41 346.06C446.191 346.278 445.973 346.496 445.646 346.496V346.387Z"
        fill="#3C3570"
      />
      <path
        opacity={0.3}
        d="M507.643 414.715C507.316 414.279 506.77 414.17 506.333 414.497C504.041 416.025 499.13 416.353 495.637 416.462C493.781 416.462 492.362 416.68 491.489 416.899C490.725 417.117 489.852 417.772 488.76 418.208C488.433 418.317 488.105 418.317 487.778 418.536C487.45 418.754 487.123 418.972 486.686 419.627C483.957 420.282 480.355 421.592 475.88 421.592H456.452C455.906 421.592 455.578 422.029 455.578 422.574C455.578 423.12 456.015 423.557 456.452 423.557H475.88C479.81 423.557 483.194 422.247 485.813 421.265L481.447 445.605L481.12 447.788C481.12 448.334 481.338 448.771 481.884 448.771C481.884 448.771 481.884 448.771 481.993 448.771C482.429 448.771 482.757 448.443 482.866 448.007L483.303 445.714C483.303 445.605 487.887 420.064 487.887 420.064C488.433 419.846 488.978 419.627 489.415 419.409C490.397 418.972 491.271 418.645 491.816 418.427C492.471 418.208 493.89 418.208 495.527 418.099C499.348 417.881 504.478 417.663 507.207 415.916C507.643 415.589 507.752 415.152 507.425 414.715H507.643Z"
        fill="#012244"
      />
      <path
        d="M489.306 234.616C489.306 234.616 487.341 242.039 481.993 246.186V242.039C483.848 241.056 486.905 238.982 489.306 234.616Z"
        fill="#F28887"
      />
    </g>
    <defs>
      <clipPath id="clip0_76_2317">
        <rect width={760} height={562} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SmartSolution;