import Image from "next/image";
import OptimizedImage from "./optimizedImage";

export default function Partners() {
  return (
    <div className="partners">
      <h2 className="partners__title">
        PARTNERS
        <svg
          width="88"
          height="92"
          viewBox="0 0 88 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_204_1638)">
            <path
              d="M39.4444 15L15 43.8H37L34.5556 63L59 34.2H37L39.4444 15Z"
              stroke="#E1943F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_204_1638"
              x="0.499969"
              y="0.499878"
              width="87.0001"
              height="91.0002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="7" dy="7" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.780392 0 0 0 0 0 0 0 0 0.45 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_204_1638"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_204_1638"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </h2>

      <div className="partners__grid">
        <div className="partners__grid__card">
          <svg
            width="1503"
            height="1504"
            viewBox="0 0 1503 1504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="287" y="258" width="928" height="844" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z"
              fill="#E84142"
            />
          </svg>

          <div className="partners__grid__card__group">
            <div>Avalanche</div>
            <div>Sponsors</div>
          </div>
        </div>
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602756/SAVE_20241202_085652_1_ryprsv.jpg" objectFit="" layout="fill" alt="" />
          </div>

          <div className="partners__grid__card__group">
            <div>Off The Grid</div>
            <div>Sponsors</div>
          </div>
        </div>
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602755/SAVE_20241202_085717_1_oyoe98.jpg" objectFit="" layout="fill" alt="" />
          </div>

          <div className="partners__grid__card__group">
            <div>Wayfinders</div>
            <div>Sponsors</div>
          </div>
        </div>
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602755/SAVE_20241202_085834_1_kocm3p.jpg" objectFit="" layout="fill" alt="" />
          </div>

          <div className="partners__grid__card__group">
            <div>Web3 Nigeria</div>
            <div>Sponsors</div>
          </div>
        </div>
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602755/SAVE_20241202_085628_1_wy6fuy.jpg" objectFit="" layout="fill" alt="" />
          </div>

          <div className="partners__grid__card__group">
            <div>SeiFarmers</div>
            <div>Sponsors</div>
          </div>
        </div>
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602755/SAVE_20241202_085739_1_gp9cug.jpg" objectFit="" layout="fill" alt="" />
          </div>

          <div className="partners__grid__card__group">
            <div>SeiFarmers</div>
            <div>Sponsors</div>
          </div>
        </div>
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602755/SAVE_20241202_085843_1_zkofnf.jpg" objectFit="" layout="fill" alt="" />
          </div>

          <div className="partners__grid__card__group">
            <div>Invigorate DAO</div>
            <div>Sponsors</div>
          </div>
        </div>
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602755/SAVE_20241202_085641_1_oj0oo6.jpg" objectFit="" layout="fill" alt="" />
          </div>

          <div className="partners__grid__card__group">
            <div>Blockchain Club Unilag</div>
            <div>Sponsors</div>
          </div>
        </div>
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602756/SAVE_20241202_085728_1_oye0kp.jpg" objectFit="" layout="fill" alt="" />
          </div>

          <div className="partners__grid__card__group">
            <div>Defi Ravers</div>
            <div>Sponsors</div>
          </div>
        </div>
        
        <div className="partners__grid__card">
          <div className="partners__grid__card__image">
            <OptimizedImage src="https://res.cloudinary.com/thewebplug/image/upload/v1735602756/SAVE_20241202_085806_1_k4ql3b.jpg" 
          objectFit="" layout="fill" alt=""
            />
          </div>

          <div className="partners__grid__card__group">
            <div>Fortizo DAO</div>
            <div>Sponsors</div>
          </div>
        </div>
      </div>
    </div>
  );
}
