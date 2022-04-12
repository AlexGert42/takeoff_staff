import cn from 'classnames'
import { TypeClassNames } from "@type/index"

type TypeIconLogoProps = TypeClassNames

const IconLogo = ({ classNames }: TypeIconLogoProps) => {
    return (
        <div className={cn(classNames)}>
            <svg width="95" height="30" viewBox="0 0 95 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.72895 26.0573L13.489 26.0552L13.4896 29.0152L0.0895953 29.0181L0.0835156 1.13813L3.72352 1.13733L3.72895 26.0573ZM26.9153 29.3723C24.862 29.3727 22.9952 28.9065 21.315 27.9735C19.6615 27.0405 18.3545 25.7208 17.3941 24.0144C16.4604 22.2812 15.9933 20.2813 15.9928 18.0147C15.9923 15.7747 16.4719 13.8012 17.4315 12.0943C18.4178 10.3608 19.7509 9.0405 21.4307 8.13347C23.1105 7.19977 24.9904 6.73269 27.0704 6.73224C29.1504 6.73179 31.0305 7.19804 32.7107 8.13101C34.3909 9.03731 35.7112 10.3437 36.6715 12.0501C37.6586 13.7566 38.1523 15.7432 38.1528 18.0098C38.1533 20.2765 37.6471 22.2766 36.6341 24.0102C35.6478 25.717 34.3015 27.0373 32.595 27.971C30.8885 28.9047 28.9953 29.3718 26.9153 29.3723ZM26.9146 26.1723C28.2213 26.172 29.4479 25.8651 30.5944 25.2515C31.7409 24.6379 32.6607 23.7177 33.3538 22.4909C34.0735 21.264 34.4332 19.7706 34.4328 18.0106C34.4324 16.2506 34.0854 14.7574 33.3918 13.5309C32.6982 12.3043 31.7914 11.3979 30.6713 10.8115C29.5511 10.1984 28.3377 9.89197 27.0311 9.89225C25.6977 9.89254 24.4711 10.1995 23.3513 10.8131C22.258 11.4 21.3782 12.3068 20.7118 13.5336C20.0454 14.7604 19.7124 16.2538 19.7128 18.0138C19.7132 19.8005 20.0335 21.3071 20.6738 22.5336C21.3407 23.7602 22.2209 24.68 23.3144 25.2931C24.4079 25.8795 25.6079 26.1726 26.9146 26.1723ZM64.0568 9.20418C63.2832 7.57768 62.1629 6.32459 60.696 5.44491C59.2292 4.53856 57.5224 4.0856 55.5757 4.08603C53.6291 4.08645 51.8692 4.54017 50.296 5.44718C48.7495 6.32751 47.5232 7.60778 46.6169 9.28798C45.7372 10.9415 45.2976 12.8616 45.2981 15.0483C45.2986 17.2349 45.739 19.1548 46.6194 20.808C47.5264 22.4611 48.7533 23.7408 50.3002 24.6472C51.8737 25.5268 53.6338 25.9665 55.5805 25.966C58.3005 25.9654 60.5403 25.1516 62.3 23.5246C64.0596 21.8975 65.0858 19.6973 65.3785 16.9239L54.2585 16.9263L54.2579 13.9663L69.2579 13.963L69.2585 16.763C69.0457 19.0564 68.3261 21.1632 67.0999 23.0835C65.8736 24.9771 64.2606 26.4841 62.2609 27.6046C60.2611 28.6983 58.0345 29.2455 55.5812 29.246C52.9945 29.2466 50.6344 28.6471 48.5008 27.4476C46.3672 26.2214 44.6735 24.5284 43.4197 22.3687C42.1926 20.2089 41.5787 17.7691 41.5781 15.0491C41.5775 12.3291 42.1903 9.88894 43.4165 7.72868C44.6694 5.54174 46.3623 3.84803 48.4954 2.64757C50.6285 1.42044 52.9883 0.806589 55.575 0.806024C58.535 0.805379 61.1485 1.53814 63.4155 3.00432C65.7091 4.47048 67.3763 6.53679 68.4168 9.20322L64.0568 9.20418ZM83.634 29.3599C81.5807 29.3604 79.7139 28.8941 78.0337 27.9611C76.3802 27.0282 75.0733 25.7084 74.1129 24.002C73.1792 22.2689 72.7121 20.269 72.7116 18.0023C72.7111 15.7623 73.1907 13.7889 74.1503 12.082C75.1366 10.3484 76.4696 9.02814 78.1494 8.1211C79.8292 7.1874 81.7091 6.72033 83.7891 6.71987C85.8691 6.71942 87.7492 7.18568 89.4294 8.11864C91.1096 9.02494 92.4299 10.3313 93.3903 12.0378C94.3773 13.7442 94.8711 15.7308 94.8716 17.9975C94.8721 20.2641 94.3658 22.2642 93.3529 23.9978C92.3666 25.7047 91.0202 27.025 89.3137 27.9587C87.6073 28.8924 85.714 29.3595 83.634 29.3599ZM83.6334 26.1599C84.94 26.1596 86.1666 25.8527 87.3132 25.2391C88.4597 24.6255 89.3795 23.7053 90.0725 22.4785C90.7923 21.2517 91.152 19.7583 91.1516 17.9983C91.1512 16.2383 90.8042 14.745 90.1106 13.5185C89.417 12.292 88.5101 11.3855 87.39 10.7991C86.2699 10.186 85.0565 9.8796 83.7498 9.87988C82.4165 9.88017 81.1899 10.1871 80.07 10.8007C78.9768 11.3876 78.097 12.2944 77.4306 13.5213C76.7642 14.7481 76.4312 16.2415 76.4316 18.0015C76.432 19.7881 76.7523 21.2947 77.3926 22.5213C78.0595 23.7478 78.9397 24.6676 80.0332 25.2807C81.1266 25.8671 82.3267 26.1602 83.6334 26.1599Z" fill="white" />
            </svg>
        </div>
    )
}

export default IconLogo



