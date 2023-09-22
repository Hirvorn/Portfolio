import React from 'react'
import './wrapper.css';

function Wrapper() {
    return (
        <div id='wrapper'>
            <svg className='lines' width="1077" height="943" viewBox="0 0 1077 943" fill="none">
                <path className='line1' d="M128.5 973.5V653L60 584.5V369L128.5 300.5V275.5M128.5 83.5V126M128.5 245.5V250.5M128.5 156V151" stroke="#F4F2DE" />
                <path className='line2' d="M379.5 967.5V833L268.5 722M236 351V648.5" stroke="#F4F2DE" />
                <path className='line3' d="M301 987V553.5L394.5 460V130M394.5 0.5V55.5M394.5 68V72.5" stroke="#F4F2DE" />
                <path className='line4' d="M591 985V652.5M510.5 205V431M560 613.5L566.5 620M533.5 587L510.5 564V518M510.5 481.5V470.5" stroke="#F4F2DE" />
                <path className='line5' d="M804 972V824L811 817M804 142.5V206M804 380.5V485.5L875 556.5V753L862 766M804 350V345.5M804 241.5V237M819.5 808.5L822.5 805.5M850.5 777.5L854 774" stroke="#F4F2DE" />
                <path className='line6' d="M909.5 969V864.5L863 818M752.5 574.5V707.5L810 765L811 766M853 808L851.5 806.5M821.5 776.5L820 775L819 774" stroke="#F4F2DE" />
                <path className='line7' d="M1076 969V700L1060.5 684.5M1008 360V557.5M1044 668L1039 663M1008 587.5V580" stroke="#F4F2DE" />
                <path className='line8' d="M517 970.5V819.5L641.5 695V455" stroke="#F4F2DE" />
                <path className='line9' d="M1 961.5V784.5L98.5 687V490" stroke="#F4F2DE" />
            </svg>

            <svg className='flower-main' width="270" height="270" viewBox="0 0 270 270" fill="none">
                <mask id="path-1-inside-1_2_52" fill="white">
                    <path id='flower-main' d="M260 135C260 163.072 250.551 190.327 233.174 212.375C215.797 234.423 191.505 249.979 164.21 256.539C136.915 263.099 108.206 260.28 82.708 248.537C57.2102 236.793 36.4076 216.808 23.6512 191.802C10.8948 166.795 6.92711 138.223 12.3874 110.687C17.8476 83.1505 32.4179 58.2539 53.7512 40.0072C75.0845 21.7605 101.939 11.226 129.989 10.1005C158.038 8.97503 185.65 17.3242 208.377 33.803L188.44 61.2986C171.888 49.2971 151.779 43.2165 131.35 44.0361C110.922 44.8558 91.3637 52.5281 75.8268 65.8171C60.2898 79.1061 49.6783 97.2382 45.7016 117.293C41.725 137.347 44.6146 158.156 53.9051 176.369C63.1955 194.581 78.346 209.135 96.916 217.688C115.486 226.241 136.394 228.294 156.273 223.517C176.152 218.739 193.844 207.409 206.5 191.352C219.155 175.295 226.037 155.445 226.037 135H260Z" />
                </mask>
                <path id='flower-main' d="M260 135C260 163.072 250.551 190.327 233.174 212.375C215.797 234.423 191.505 249.979 164.21 256.539C136.915 263.099 108.206 260.28 82.708 248.537C57.2102 236.793 36.4076 216.808 23.6512 191.802C10.8948 166.795 6.92711 138.223 12.3874 110.687C17.8476 83.1505 32.4179 58.2539 53.7512 40.0072C75.0845 21.7605 101.939 11.226 129.989 10.1005C158.038 8.97503 185.65 17.3242 208.377 33.803L188.44 61.2986C171.888 49.2971 151.779 43.2165 131.35 44.0361C110.922 44.8558 91.3637 52.5281 75.8268 65.8171C60.2898 79.1061 49.6783 97.2382 45.7016 117.293C41.725 137.347 44.6146 158.156 53.9051 176.369C63.1955 194.581 78.346 209.135 96.916 217.688C115.486 226.241 136.394 228.294 156.273 223.517C176.152 218.739 193.844 207.409 206.5 191.352C219.155 175.295 226.037 155.445 226.037 135H260Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-1-inside-1_2_52)" />
                <g filter="url(#filter0_f_2_52)">
                    <mask id="path-2-inside-2_2_52" fill="white">
                        <path id='flower-main' d="M260 135C260 163.064 250.556 190.312 233.188 212.357C215.821 234.401 191.54 249.96 164.255 256.528C136.97 263.097 108.269 260.292 82.7717 248.566C57.2745 236.84 36.4651 216.875 23.6937 191.885C10.9222 166.895 6.93172 138.335 12.3647 110.801C17.7977 83.2678 32.338 58.3637 53.6448 40.0983C74.9515 21.8329 101.785 11.269 129.825 10.1072C157.865 8.94535 185.481 17.2533 208.226 33.6935L189.113 60.1357C172.305 47.9866 151.897 41.8472 131.176 42.7057C110.455 43.5643 90.6249 51.3709 74.8795 64.8688C59.1341 78.3667 48.3889 96.7705 44.374 117.117C40.3591 137.464 43.308 158.57 52.746 177.037C62.184 195.504 77.5618 210.258 96.4039 218.924C115.246 227.589 136.456 229.662 156.619 224.808C176.782 219.954 194.725 208.456 207.56 192.166C220.394 175.875 227.373 155.739 227.373 135H260Z" />
                    </mask>
                    <path id='flower-main' d="M260 135C260 163.064 250.556 190.312 233.188 212.357C215.821 234.401 191.54 249.96 164.255 256.528C136.97 263.097 108.269 260.292 82.7717 248.566C57.2745 236.84 36.4651 216.875 23.6937 191.885C10.9222 166.895 6.93172 138.335 12.3647 110.801C17.7977 83.2678 32.338 58.3637 53.6448 40.0983C74.9515 21.8329 101.785 11.269 129.825 10.1072C157.865 8.94535 185.481 17.2533 208.226 33.6935L189.113 60.1357C172.305 47.9866 151.897 41.8472 131.176 42.7057C110.455 43.5643 90.6249 51.3709 74.8795 64.8688C59.1341 78.3667 48.3889 96.7705 44.374 117.117C40.3591 137.464 43.308 158.57 52.746 177.037C62.184 195.504 77.5618 210.258 96.4039 218.924C115.246 227.589 136.456 229.662 156.619 224.808C176.782 219.954 194.725 208.456 207.56 192.166C220.394 175.875 227.373 155.739 227.373 135H260Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-2-inside-2_2_52)" />
                </g>
                <circle id='flower-main' cx="134.5" cy="134.5" r="86" stroke="#F4F2DE" stroke-width="3" />
                <g filter="url(#filter1_f_2_52)">
                    <circle id='flower-main' cx="134.5" cy="134.5" r="86" stroke="#F4F2DE" stroke-width="3" />
                </g>
                <mask id="path-5-inside-3_2_52" fill="white">
                    <path id='flower-main' d="M210 135C210 149.834 205.601 164.334 197.36 176.668C189.119 189.001 177.406 198.614 163.701 204.291C149.997 209.968 134.917 211.453 120.368 208.559C105.82 205.665 92.4559 198.522 81.967 188.033C71.4781 177.544 64.335 164.18 61.4411 149.632C58.5472 135.083 60.0325 120.003 65.709 106.299C71.3856 92.5943 80.9985 80.8809 93.3322 72.6398C105.666 64.3987 120.166 60 135 60V97.4375C127.571 97.4375 120.309 99.6405 114.131 103.768C107.954 107.895 103.14 113.762 100.297 120.625C97.4538 127.489 96.7099 135.042 98.1592 142.328C99.6086 149.614 103.186 156.307 108.439 161.561C113.693 166.814 120.386 170.391 127.672 171.841C134.958 173.29 142.511 172.546 149.375 169.703C156.238 166.86 162.105 162.046 166.232 155.869C170.36 149.691 172.562 142.429 172.562 135H210Z" />
                </mask>
                <path id='flower-main' d="M210 135C210 149.834 205.601 164.334 197.36 176.668C189.119 189.001 177.406 198.614 163.701 204.291C149.997 209.968 134.917 211.453 120.368 208.559C105.82 205.665 92.4559 198.522 81.967 188.033C71.4781 177.544 64.335 164.18 61.4411 149.632C58.5472 135.083 60.0325 120.003 65.709 106.299C71.3856 92.5943 80.9985 80.8809 93.3322 72.6398C105.666 64.3987 120.166 60 135 60V97.4375C127.571 97.4375 120.309 99.6405 114.131 103.768C107.954 107.895 103.14 113.762 100.297 120.625C97.4538 127.489 96.7099 135.042 98.1592 142.328C99.6086 149.614 103.186 156.307 108.439 161.561C113.693 166.814 120.386 170.391 127.672 171.841C134.958 173.29 142.511 172.546 149.375 169.703C156.238 166.86 162.105 162.046 166.232 155.869C170.36 149.691 172.562 142.429 172.562 135H210Z" stroke="#E9B384" stroke-width="6" mask="url(#path-5-inside-3_2_52)" />
                <g filter="url(#filter2_f_2_52)">
                    <mask id="path-6-inside-4_2_52" fill="white">
                        <path id='flower-main' d="M210 135C210 149.834 205.601 164.334 197.36 176.668C189.119 189.001 177.406 198.614 163.701 204.291C149.997 209.968 134.917 211.453 120.368 208.559C105.82 205.665 92.4559 198.522 81.967 188.033C71.4781 177.544 64.335 164.18 61.4411 149.632C58.5472 135.083 60.0325 120.003 65.709 106.299C71.3856 92.5943 80.9985 80.8809 93.3322 72.6398C105.666 64.3987 120.166 60 135 60V97.3906C127.562 97.3906 120.29 99.5964 114.105 103.729C107.921 107.862 103.1 113.735 100.253 120.608C97.4069 127.48 96.6621 135.042 98.1133 142.337C99.5645 149.633 103.146 156.334 108.406 161.594C113.666 166.854 120.367 170.436 127.663 171.887C134.958 173.338 142.52 172.593 149.392 169.747C156.265 166.9 162.138 162.079 166.271 155.895C170.404 149.71 172.609 142.438 172.609 135H210Z" />
                    </mask>
                    <path id='flower-main' d="M210 135C210 149.834 205.601 164.334 197.36 176.668C189.119 189.001 177.406 198.614 163.701 204.291C149.997 209.968 134.917 211.453 120.368 208.559C105.82 205.665 92.4559 198.522 81.967 188.033C71.4781 177.544 64.335 164.18 61.4411 149.632C58.5472 135.083 60.0325 120.003 65.709 106.299C71.3856 92.5943 80.9985 80.8809 93.3322 72.6398C105.666 64.3987 120.166 60 135 60V97.3906C127.562 97.3906 120.29 99.5964 114.105 103.729C107.921 107.862 103.1 113.735 100.253 120.608C97.4069 127.48 96.6621 135.042 98.1133 142.337C99.5645 149.633 103.146 156.334 108.406 161.594C113.666 166.854 120.367 170.436 127.663 171.887C134.958 173.338 142.52 172.593 149.392 169.747C156.265 166.9 162.138 162.079 166.271 155.895C170.404 149.71 172.609 142.438 172.609 135H210Z" stroke="#E9B384" stroke-width="6" mask="url(#path-6-inside-4_2_52)" />
                </g>
                <defs>
                    <filter id="filter0_f_2_52" x="-0.000152588" y="-5.53604e-05" width="270" height="270" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2_52" />
                    </filter>
                    <filter id="filter1_f_2_52" x="37" y="37" width="195" height="195" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2_52" />
                    </filter>
                    <filter id="filter2_f_2_52" x="55" y="55" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2_52" />
                    </filter>
                </defs>
            </svg>

            <svg className='flower-1' width="190" height="190" viewBox="0 0 190 190" fill="none">
                <circle id='flower-1' cx="95" cy="95" r="73.5" stroke="#7C9D96" stroke-width="3" />
                <mask id="path-2-inside-1_2_56" fill="white">
                    <path id='flower-1' d="M170 95C170 104.849 168.06 114.602 164.291 123.701C160.522 132.801 154.997 141.069 148.033 148.033C141.069 154.997 132.801 160.522 123.701 164.291C114.602 168.06 104.849 170 95 170V149.027C102.095 149.027 109.12 147.629 115.675 144.914C122.23 142.199 128.186 138.22 133.203 133.203C138.22 128.186 142.199 122.23 144.914 115.675C147.629 109.12 149.027 102.095 149.027 95H170Z" />
                </mask>
                <path id='flower-1' d="M170 95C170 104.849 168.06 114.602 164.291 123.701C160.522 132.801 154.997 141.069 148.033 148.033C141.069 154.997 132.801 160.522 123.701 164.291C114.602 168.06 104.849 170 95 170V149.027C102.095 149.027 109.12 147.629 115.675 144.914C122.23 142.199 128.186 138.22 133.203 133.203C138.22 128.186 142.199 122.23 144.914 115.675C147.629 109.12 149.027 102.095 149.027 95H170Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-2-inside-1_2_56)" />
                <g filter="url(#filter0_f_2_56)">
                    <circle id='flower-1' cx="95" cy="95" r="73.5" stroke="#7C9D96" stroke-width="3" />
                </g>
                <circle id='flower-1' cx="94.7" cy="94.7" r="51" stroke="#F4F2DE" stroke-width="3" />
                <g filter="url(#filter1_f_2_56)">
                    <circle id='flower-1' cx="94.7" cy="94.7" r="51" stroke="#F4F2DE" stroke-width="3" />
                </g>
                <circle id='flower-1' cx="95" cy="95" r="43.5" stroke="#E9B384" stroke-width="3" />
                <g filter="url(#filter2_f_2_56)">
                    <circle id='flower-1' cx="95" cy="95" r="43.5" stroke="#E9B384" stroke-width="3" />
                </g>
                <defs>
                    <filter id="filter0_f_2_56" x="0" y="0" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_56" />
                    </filter>
                    <filter id="filter1_f_2_56" x="32.2" y="32.2" width="125" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2_56" />
                    </filter>
                    <filter id="filter2_f_2_56" x="45" y="45" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2_56" />
                    </filter>
                </defs>
            </svg>

            <svg className='flower-2' width="185" height="190" viewBox="0 0 185 190" fill="none">
                <mask id="path-1-inside-1_2_77" fill="white">
                    <path id='flower-2' d="M20.8442 124.025C27.5594 140.025 39.6144 153.201 54.9554 161.309C70.2963 169.417 87.9739 171.954 104.976 168.49C121.978 165.025 137.253 155.772 148.198 142.308C159.143 128.843 165.08 112 164.999 94.6488C164.918 77.2974 158.823 60.5109 147.752 47.1496C136.682 33.7882 121.321 24.6788 104.287 21.3734C87.2533 18.068 69.6002 20.7711 54.3359 29.0222C39.0716 37.2733 27.1405 50.5618 20.5754 66.6235L44.1155 76.2453C48.4545 65.6296 56.3401 56.8469 66.4287 51.3936C76.5173 45.9402 88.1846 44.1537 99.4428 46.3383C110.701 48.5229 120.853 54.5436 128.17 63.3744C135.487 72.2053 139.515 83.2999 139.569 94.7679C139.623 106.236 135.698 117.368 128.464 126.267C121.231 135.166 111.135 141.281 99.8981 143.571C88.6609 145.861 76.9773 144.184 66.8381 138.825C56.6989 133.467 48.7314 124.758 44.2932 114.184L20.8442 124.025Z" />
                </mask>
                <path id='flower-2' d="M20.8442 124.025C27.5594 140.025 39.6144 153.201 54.9554 161.309C70.2963 169.417 87.9739 171.954 104.976 168.49C121.978 165.025 137.253 155.772 148.198 142.308C159.143 128.843 165.08 112 164.999 94.6488C164.918 77.2974 158.823 60.5109 147.752 47.1496C136.682 33.7882 121.321 24.6788 104.287 21.3734C87.2533 18.068 69.6002 20.7711 54.3359 29.0222C39.0716 37.2733 27.1405 50.5618 20.5754 66.6235L44.1155 76.2453C48.4545 65.6296 56.3401 56.8469 66.4287 51.3936C76.5173 45.9402 88.1846 44.1537 99.4428 46.3383C110.701 48.5229 120.853 54.5436 128.17 63.3744C135.487 72.2053 139.515 83.2999 139.569 94.7679C139.623 106.236 135.698 117.368 128.464 126.267C121.231 135.166 111.135 141.281 99.8981 143.571C88.6609 145.861 76.9773 144.184 66.8381 138.825C56.6989 133.467 48.7314 124.758 44.2932 114.184L20.8442 124.025Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-1-inside-1_2_77)" />
                <g filter="url(#filter0_f_2_77)">
                    <mask id="path-2-inside-2_2_77" fill="white">
                        <path id='flower-2' d="M20.8518 124.043C27.5711 140.041 39.6296 153.214 54.9726 161.318C70.3157 169.422 87.9939 171.955 104.995 168.486C121.996 165.016 137.269 155.76 148.21 142.292C159.152 128.825 165.085 111.981 164.999 94.6293C164.913 77.2779 158.814 60.493 147.74 47.1345C136.666 33.7761 121.303 24.6707 104.268 21.3697C87.2332 18.0687 69.5809 20.7764 54.3187 29.0315C39.0566 37.2865 27.1289 50.5781 20.568 66.6416L43.4427 75.9844C47.8421 65.2131 55.8401 56.3005 66.0741 50.7651C76.3081 45.2297 88.1448 43.4141 99.5673 45.6275C110.99 47.841 121.292 53.9466 128.717 62.904C136.143 71.8615 140.233 83.1165 140.29 94.7514C140.348 106.386 136.369 117.681 129.033 126.712C121.696 135.742 111.455 141.949 100.055 144.275C88.6548 146.602 76.8007 144.903 66.5125 139.469C56.2243 134.035 48.1386 125.202 43.6329 114.475L20.8518 124.043Z" />
                    </mask>
                    <path id='flower-2' d="M20.8518 124.043C27.5711 140.041 39.6296 153.214 54.9726 161.318C70.3157 169.422 87.9939 171.955 104.995 168.486C121.996 165.016 137.269 155.76 148.21 142.292C159.152 128.825 165.085 111.981 164.999 94.6293C164.913 77.2779 158.814 60.493 147.74 47.1345C136.666 33.7761 121.303 24.6707 104.268 21.3697C87.2332 18.0687 69.5809 20.7764 54.3187 29.0315C39.0566 37.2865 27.1289 50.5781 20.568 66.6416L43.4427 75.9844C47.8421 65.2131 55.8401 56.3005 66.0741 50.7651C76.3081 45.2297 88.1448 43.4141 99.5673 45.6275C110.99 47.841 121.292 53.9466 128.717 62.904C136.143 71.8615 140.233 83.1165 140.29 94.7514C140.348 106.386 136.369 117.681 129.033 126.712C121.696 135.742 111.455 141.949 100.055 144.275C88.6548 146.602 76.8007 144.903 66.5125 139.469C56.2243 134.035 48.1386 125.202 43.6329 114.475L20.8518 124.043Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-2-inside-2_2_77)" />
                </g>
                <circle id='flower-2' cx="90" cy="95" r="43.5" stroke="#F4F2DE" stroke-width="3" />
                <g filter="url(#filter1_f_2_77)">
                    <circle id='flower-2' cx="90" cy="95" r="43.5" stroke="#F4F2DE" stroke-width="3" />
                </g>
                <defs>
                    <filter id="filter0_f_2_77" x="0.568024" y="-0.00012207" width="184.432" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_77" />
                    </filter>
                    <filter id="filter1_f_2_77" x="40" y="45" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2_77" />
                    </filter>
                </defs>
            </svg>

            <svg className='flower-3' width="115" height="115" viewBox="0 0 115 115" fill="none">
                <circle id='flower-3' cx="57.5" cy="57.5" r="36" stroke="#7C9D96" stroke-width="3" />
                <g filter="url(#filter0_f_2_84)">
                    <circle id='flower-3' cx="57.5" cy="57.5" r="36" stroke="#7C9D96" stroke-width="3" />
                </g>
                <circle id='flower-3' cx="57.35" cy="57.35" r="24.75" stroke="#F4F2DE" stroke-width="3" />
                <g filter="url(#filter1_f_2_84)">
                    <circle id='flower-3' cx="57.35" cy="57.35" r="24.75" stroke="#F4F2DE" stroke-width="3" />
                </g>
                <circle id='flower-3' cx="57.5" cy="57.5" r="20" stroke="#E9B384" stroke-width="3" />
                <g filter="url(#filter2_f_2_84)">
                    <circle id='flower-3' cx="57.5" cy="57.5" r="20" stroke="#E9B384" stroke-width="3" />
                </g>
                <defs>
                    <filter id="filter0_f_2_84" x="0" y="0" width="115" height="115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_84" />
                    </filter>
                    <filter id="filter1_f_2_84" x="21.1" y="21.1" width="72.5" height="72.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2_84" />
                    </filter>
                    <filter id="filter2_f_2_84" x="31" y="31" width="53" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2_84" />
                    </filter>
                </defs>
            </svg>

            <svg className='flower-4' width="115" height="115" viewBox="0 0 115 115" fill="none">
                <circle id='flower-4' cx="57.5" cy="57.5" r="36" stroke="#7C9D96" stroke-width="3" />
                <mask id="path-2-inside-1_2_91" fill="white">
                    <path id='flower-4' d="M84.0165 30.9835C76.9839 23.9509 67.4456 20 57.5 20C47.5544 20 38.0161 23.9509 30.9835 30.9835C23.9509 38.0161 20 47.5544 20 57.5C20 67.4456 23.9509 76.9839 30.9835 84.0165L40.4446 74.5554C35.9213 70.032 33.3801 63.897 33.3801 57.5C33.3801 51.103 35.9213 44.968 40.4446 40.4447C44.968 35.9213 51.103 33.3801 57.5 33.3801C63.897 33.3801 70.032 35.9213 74.5553 40.4446L84.0165 30.9835Z" />
                </mask>
                <path id='flower-4' d="M84.0165 30.9835C76.9839 23.9509 67.4456 20 57.5 20C47.5544 20 38.0161 23.9509 30.9835 30.9835C23.9509 38.0161 20 47.5544 20 57.5C20 67.4456 23.9509 76.9839 30.9835 84.0165L40.4446 74.5554C35.9213 70.032 33.3801 63.897 33.3801 57.5C33.3801 51.103 35.9213 44.968 40.4446 40.4447C44.968 35.9213 51.103 33.3801 57.5 33.3801C63.897 33.3801 70.032 35.9213 74.5553 40.4446L84.0165 30.9835Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-2-inside-1_2_91)" />
                <g filter="url(#filter0_f_2_91)">
                    <circle id='flower-4' cx="57.5" cy="57.5" r="36" stroke="#7C9D96" stroke-width="3" />
                </g>
                <g filter="url(#filter1_f_2_91)">
                    <mask id="path-4-inside-2_2_91" fill="white">
                        <path id='flower-4' d="M84.0165 30.9835C76.9839 23.9509 67.4456 20 57.5 20C47.5544 20 38.0161 23.9509 30.9835 30.9835C23.9509 38.0161 20 47.5544 20 57.5C20 67.4456 23.9509 76.9839 30.9835 84.0165L40.1606 74.8394C35.5619 70.2407 32.9783 64.0035 32.9783 57.5C32.9783 50.9965 35.5619 44.7593 40.1606 40.1606C44.7593 35.5619 50.9965 32.9784 57.5 32.9783C64.0035 32.9783 70.2407 35.5619 74.8394 40.1606L84.0165 30.9835Z" />
                    </mask>
                    <path id='flower-4' d="M84.0165 30.9835C76.9839 23.9509 67.4456 20 57.5 20C47.5544 20 38.0161 23.9509 30.9835 30.9835C23.9509 38.0161 20 47.5544 20 57.5C20 67.4456 23.9509 76.9839 30.9835 84.0165L40.1606 74.8394C35.5619 70.2407 32.9783 64.0035 32.9783 57.5C32.9783 50.9965 35.5619 44.7593 40.1606 40.1606C44.7593 35.5619 50.9965 32.9784 57.5 32.9783C64.0035 32.9783 70.2407 35.5619 74.8394 40.1606L84.0165 30.9835Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-4-inside-2_2_91)" />
                </g>
                <circle id='flower-4' cx="57.5" cy="57.5" r="21" stroke="#F4F2DE" stroke-width="3" />
                <g filter="url(#filter2_f_2_91)">
                    <circle id='flower-4' cx="57.5" cy="57.5" r="21" stroke="#F4F2DE" stroke-width="3" />
                </g>
                <defs>
                    <filter id="filter0_f_2_91" x="0" y="0" width="115" height="115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_91" />
                    </filter>
                    <filter id="filter1_f_2_91" x="0" y="0" width="104.017" height="104.017" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_91" />
                    </filter>
                    <filter id="filter2_f_2_91" x="30" y="30" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2_91" />
                    </filter>
                </defs>
            </svg>

            <svg className='flower-5' width="170" height="190" viewBox="0 0 170 190" fill="none">
                <mask id="path-1-inside-1_2_70" fill="white">
                    <path id='flower-5' d="M148.033 148.033C139.312 156.754 128.574 163.19 116.771 166.771C104.969 170.351 92.465 170.965 80.3681 168.559C68.2713 166.153 56.9545 160.8 47.4204 152.976C37.8862 145.151 30.4289 135.096 25.7089 123.701C20.989 112.306 19.1522 99.9229 20.3612 87.6484C21.5702 75.374 25.7876 63.5871 32.64 53.3319C39.4924 43.0767 48.7681 34.6698 59.6456 28.8557C70.5231 23.0416 82.6667 19.9999 95.0005 20L95.0004 39.4672C85.8679 39.4671 76.8764 41.7193 68.8223 46.0243C60.7682 50.3292 53.9001 56.5541 48.8263 64.1474C43.7526 71.7407 40.6298 80.4681 39.7346 89.5566C38.8395 98.6451 40.1995 107.814 43.6943 116.251C47.1891 124.689 52.7108 132.134 59.7703 137.927C66.8297 143.721 75.209 147.684 84.166 149.466C93.123 151.247 102.381 150.793 111.12 148.142C119.859 145.491 127.81 140.725 134.268 134.268L148.033 148.033Z" />
                </mask>
                <path id='flower-5' d="M148.033 148.033C139.312 156.754 128.574 163.19 116.771 166.771C104.969 170.351 92.465 170.965 80.3681 168.559C68.2713 166.153 56.9545 160.8 47.4204 152.976C37.8862 145.151 30.4289 135.096 25.7089 123.701C20.989 112.306 19.1522 99.9229 20.3612 87.6484C21.5702 75.374 25.7876 63.5871 32.64 53.3319C39.4924 43.0767 48.7681 34.6698 59.6456 28.8557C70.5231 23.0416 82.6667 19.9999 95.0005 20L95.0004 39.4672C85.8679 39.4671 76.8764 41.7193 68.8223 46.0243C60.7682 50.3292 53.9001 56.5541 48.8263 64.1474C43.7526 71.7407 40.6298 80.4681 39.7346 89.5566C38.8395 98.6451 40.1995 107.814 43.6943 116.251C47.1891 124.689 52.7108 132.134 59.7703 137.927C66.8297 143.721 75.209 147.684 84.166 149.466C93.123 151.247 102.381 150.793 111.12 148.142C119.859 145.491 127.81 140.725 134.268 134.268L148.033 148.033Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-1-inside-1_2_70)" />
                <g filter="url(#filter0_f_2_70)">
                    <mask id="path-2-inside-2_2_70" fill="white">
                        <path id='flower-5' d="M148.033 148.033C139.312 156.754 128.574 163.19 116.771 166.771C104.969 170.351 92.4651 170.965 80.3682 168.559C68.2714 166.153 56.9547 160.8 47.4205 152.976C37.8863 145.151 30.429 135.096 25.709 123.701C20.9891 112.306 19.1522 99.9232 20.3611 87.6487C21.5701 75.3743 25.7875 63.5875 32.6398 53.3323C39.4921 43.0771 48.7678 34.67 59.6452 28.8559C70.5227 23.0418 82.6661 20 95 20L95 39.5413C85.8797 39.5413 76.9003 41.7905 68.8569 46.0898C60.8136 50.3891 53.9547 56.6056 48.8878 64.1888C43.8208 71.772 40.7023 80.4878 39.8083 89.5641C38.9144 98.6404 40.2727 107.797 43.7628 116.223C47.253 124.649 52.7673 132.084 59.8174 137.87C66.8674 143.656 75.2356 147.614 84.1805 149.393C93.1255 151.172 102.371 150.718 111.099 148.071C119.826 145.423 127.766 140.664 134.215 134.215L148.033 148.033Z" />
                    </mask>
                    <path id='flower-5' d="M148.033 148.033C139.312 156.754 128.574 163.19 116.771 166.771C104.969 170.351 92.4651 170.965 80.3682 168.559C68.2714 166.153 56.9547 160.8 47.4205 152.976C37.8863 145.151 30.429 135.096 25.709 123.701C20.9891 112.306 19.1522 99.9232 20.3611 87.6487C21.5701 75.3743 25.7875 63.5875 32.6398 53.3323C39.4921 43.0771 48.7678 34.67 59.6452 28.8559C70.5227 23.0418 82.6661 20 95 20L95 39.5413C85.8797 39.5413 76.9003 41.7905 68.8569 46.0898C60.8136 50.3891 53.9547 56.6056 48.8878 64.1888C43.8208 71.772 40.7023 80.4878 39.8083 89.5641C38.9144 98.6404 40.2727 107.797 43.7628 116.223C47.253 124.649 52.7673 132.084 59.8174 137.87C66.8674 143.656 75.2356 147.614 84.1805 149.393C93.1255 151.172 102.371 150.718 111.099 148.071C119.826 145.423 127.766 140.664 134.215 134.215L148.033 148.033Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-2-inside-2_2_70)" />
                </g>
                <circle id='flower-5' cx="94.7" cy="94.7" r="51" stroke="#F4F2DE" stroke-width="3" />
                <g filter="url(#filter1_f_2_70)">
                    <circle id='flower-5' cx="94.7" cy="94.7" r="51" stroke="#F4F2DE" stroke-width="3" />
                </g>
                <circle id='flower-5' cx="95" cy="95" r="43.5" stroke="#E9B384" stroke-width="3" />
                <g filter="url(#filter2_f_2_70)">
                    <circle id='flower-5' cx="95" cy="95" r="43.5" stroke="#E9B384" stroke-width="3" />
                </g>
                <defs>
                    <filter id="filter0_f_2_70" x="-3.05176e-05" y="0" width="168.033" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_70" />
                    </filter>
                    <filter id="filter1_f_2_70" x="32.2" y="32.2" width="125" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2_70" />
                    </filter>
                    <filter id="filter2_f_2_70" x="45" y="45" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2_70" />
                    </filter>
                </defs>
            </svg>

            <svg className='flower-6' width="215" height="215" viewBox="0 0 215 215" fill="none">
                <mask id="path-1-inside-1_2_63" fill="white">
                    <path id='flower-6' d="M20 107.5C20 127.148 26.6126 146.223 38.773 161.656C50.9333 177.088 67.9337 187.979 87.0365 192.573C106.139 197.168 126.233 195.2 144.081 186.986C161.929 178.772 176.493 164.79 185.428 147.292C194.364 129.794 197.149 109.797 193.337 90.523C189.525 71.2487 179.337 53.8184 164.414 41.0387C149.49 28.2591 130.7 20.8741 111.068 20.0728C91.4372 19.2715 72.1075 25.1007 56.1921 36.6216L74.6885 62.1731C84.8664 54.8055 97.2278 51.0777 109.782 51.5901C122.336 52.1025 134.353 56.8253 143.896 64.9979C153.44 73.1705 159.955 84.3172 162.393 96.6432C164.831 108.969 163.049 121.757 157.335 132.947C151.621 144.137 142.308 153.079 130.894 158.332C119.48 163.585 106.63 164.843 94.4135 161.905C82.1973 158.966 71.3255 152.002 63.5489 142.133C55.7723 132.264 51.5436 120.065 51.5436 107.5H20Z" />
                </mask>
                <path id='flower-6' d="M20 107.5C20 127.148 26.6126 146.223 38.773 161.656C50.9333 177.088 67.9337 187.979 87.0365 192.573C106.139 197.168 126.233 195.2 144.081 186.986C161.929 178.772 176.493 164.79 185.428 147.292C194.364 129.794 197.149 109.797 193.337 90.523C189.525 71.2487 179.337 53.8184 164.414 41.0387C149.49 28.2591 130.7 20.8741 111.068 20.0728C91.4372 19.2715 72.1075 25.1007 56.1921 36.6216L74.6885 62.1731C84.8664 54.8055 97.2278 51.0777 109.782 51.5901C122.336 52.1025 134.353 56.8253 143.896 64.9979C153.44 73.1705 159.955 84.3172 162.393 96.6432C164.831 108.969 163.049 121.757 157.335 132.947C151.621 144.137 142.308 153.079 130.894 158.332C119.48 163.585 106.63 164.843 94.4135 161.905C82.1973 158.966 71.3255 152.002 63.5489 142.133C55.7723 132.264 51.5436 120.065 51.5436 107.5H20Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-1-inside-1_2_63)" />
                <g filter="url(#filter0_f_2_63)">
                    <mask id="path-2-inside-2_2_63" fill="white">
                        <path id='flower-6' d="M56.6336 36.3041C72.577 24.9132 91.8823 19.2035 111.457 20.0895C131.031 20.9755 149.742 28.4061 164.591 41.1908C179.44 53.9755 189.568 71.3742 193.352 90.5997C197.137 109.825 194.359 129.765 185.463 147.223C176.568 164.682 162.07 178.65 144.292 186.889C126.514 195.128 106.484 197.161 87.4133 192.663C68.3422 188.165 51.3328 177.396 39.1101 162.081C26.8875 146.766 20.159 127.792 20.0028 108.198L51.242 107.949C51.3425 120.547 55.6686 132.747 63.5274 142.594C71.3862 152.441 82.3227 159.365 94.5849 162.257C106.847 165.149 119.725 163.842 131.156 158.545C142.587 153.247 151.909 144.266 157.628 133.041C163.348 121.815 165.134 108.995 162.7 96.6336C160.267 84.2723 153.755 73.0854 144.208 64.8652C134.66 56.6451 122.63 51.8674 110.044 51.2977C97.4583 50.728 85.0456 54.3993 74.7945 61.7232L56.6336 36.3041Z" />
                    </mask>
                    <path id='flower-6' d="M56.6336 36.3041C72.577 24.9132 91.8823 19.2035 111.457 20.0895C131.031 20.9755 149.742 28.4061 164.591 41.1908C179.44 53.9755 189.568 71.3742 193.352 90.5997C197.137 109.825 194.359 129.765 185.463 147.223C176.568 164.682 162.07 178.65 144.292 186.889C126.514 195.128 106.484 197.161 87.4133 192.663C68.3422 188.165 51.3328 177.396 39.1101 162.081C26.8875 146.766 20.159 127.792 20.0028 108.198L51.242 107.949C51.3425 120.547 55.6686 132.747 63.5274 142.594C71.3862 152.441 82.3227 159.365 94.5849 162.257C106.847 165.149 119.725 163.842 131.156 158.545C142.587 153.247 151.909 144.266 157.628 133.041C163.348 121.815 165.134 108.995 162.7 96.6336C160.267 84.2723 153.755 73.0854 144.208 64.8652C134.66 56.6451 122.63 51.8674 110.044 51.2977C97.4583 50.728 85.0456 54.3993 74.7945 61.7232L56.6336 36.3041Z" stroke="#7C9D96" stroke-width="6" mask="url(#path-2-inside-2_2_63)" />
                </g>
                <circle id='flower-6' cx="107.5" cy="107.5" r="51" stroke="#E9B384" stroke-width="3" />
                <g filter="url(#filter1_f_2_63)">
                    <circle id='flower-6' cx="107.5" cy="107.5" r="51" stroke="#E9B384" stroke-width="3" />
                </g>
                <defs>
                    <filter id="filter0_f_2_63" x="0.0027771" y="-4.57764e-05" width="214.997" height="215" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2_63" />
                    </filter>
                    <filter id="filter1_f_2_63" x="50" y="50" width="115" height="115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2_63" />
                    </filter>
                </defs>
            </svg>

            <svg className='small-circles' width="951" height="614" viewBox="0 0 951 614" fill="none">
                <circle cx="157.5" cy="370.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter0_f_104_2)">
                    <circle cx="157.5" cy="370.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="157.5" cy="370.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter1_f_104_2)">
                    <circle cx="157.5" cy="370.5" r="14" stroke="#F4F2DE" />
                </g>
                <circle cx="316.5" cy="20.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter2_f_104_2)">
                    <circle cx="316.5" cy="20.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="316.5" cy="20.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter3_f_104_2)">
                    <circle cx="316.5" cy="20.5" r="14" stroke="#F4F2DE" />
                </g>
                <circle cx="432.5" cy="225.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter4_f_104_2)">
                    <circle cx="432.5" cy="225.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="432.5" cy="225.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter5_f_104_2)">
                    <circle cx="432.5" cy="225.5" r="14" stroke="#F4F2DE" />
                </g>
                <circle cx="563.5" cy="474.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter6_f_104_2)">
                    <circle cx="563.5" cy="474.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="563.5" cy="474.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter7_f_104_2)">
                    <circle cx="563.5" cy="474.5" r="14" stroke="#F4F2DE" />
                </g>
                <circle cx="674.5" cy="593.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter8_f_104_2)">
                    <circle cx="674.5" cy="593.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="674.5" cy="593.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter9_f_104_2)">
                    <circle cx="674.5" cy="593.5" r="14" stroke="#F4F2DE" />
                </g>
                <circle cx="726.5" cy="162.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter10_f_104_2)">
                    <circle cx="726.5" cy="162.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="726.5" cy="162.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter11_f_104_2)">
                    <circle cx="726.5" cy="162.5" r="14" stroke="#F4F2DE" />
                </g>
                <circle cx="930.5" cy="379.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter12_f_104_2)">
                    <circle cx="930.5" cy="379.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="930.5" cy="379.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter13_f_104_2)">
                    <circle cx="930.5" cy="379.5" r="14" stroke="#F4F2DE" />
                </g>
                <circle cx="20.5" cy="509.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter14_f_104_2)">
                    <circle cx="20.5" cy="509.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="20.5" cy="509.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter15_f_104_2)">
                    <circle cx="20.5" cy="509.5" r="14" stroke="#F4F2DE" />
                </g>
                <circle cx="50.5" cy="103.5" r="9.5" fill="#F4F2DE" />
                <g filter="url(#filter16_f_104_2)">
                    <circle cx="50.5" cy="103.5" r="9.5" fill="#F4F2DE" />
                </g>
                <circle cx="50.5" cy="103.5" r="14" stroke="#F4F2DE" />
                <g filter="url(#filter17_f_104_2)">
                    <circle cx="50.5" cy="103.5" r="14" stroke="#F4F2DE" />
                </g>
                <defs>
                    <filter id="filter0_f_104_2" x="144" y="357" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter1_f_104_2" x="137" y="350" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter2_f_104_2" x="303" y="7" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter3_f_104_2" x="296" y="0" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter4_f_104_2" x="419" y="212" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter5_f_104_2" x="412" y="205" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter6_f_104_2" x="550" y="461" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter7_f_104_2" x="543" y="454" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter8_f_104_2" x="661" y="580" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter9_f_104_2" x="654" y="573" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter10_f_104_2" x="713" y="149" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter11_f_104_2" x="706" y="142" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter12_f_104_2" x="917" y="366" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter13_f_104_2" x="910" y="359" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter14_f_104_2" x="7" y="496" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter15_f_104_2" x="0" y="489" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter16_f_104_2" x="37" y="90" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_104_2" />
                    </filter>
                    <filter id="filter17_f_104_2" x="30" y="83" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_104_2" />
                    </filter>
                </defs>
            </svg>

        </div>
    )
}

export default Wrapper;