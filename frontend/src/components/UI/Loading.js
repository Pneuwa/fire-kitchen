import classes from "../Custom.module.css";

export default function Loading() {
  return (
    <div className={classes.loading}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="43.000000pt"
        height="55.000000pt"
        viewBox="0 0 43.000000 55.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,55.000000) scale(0.100000,-0.100000)"
          fill="#ff3333"
          stroke="none"
        >
          <path
            d="M255 490 c-3 -5 -1 -19 5 -31 15 -27 35 -10 25 20 -7 22 -20 27 -30
11z"
          />
          <path
            d="M181 437 c-15 -19 -17 -44 -7 -100 7 -39 5 -51 -9 -67 -10 -11 -26
-20 -37 -20 -15 0 -18 8 -18 51 0 59 -14 61 -45 8 -28 -48 -27 -142 2 -189 66
-107 240 -104 296 4 39 74 19 195 -40 248 -19 17 -19 16 -16 -40 3 -46 0 -62
-16 -82 l-21 -25 0 37 c0 25 -9 47 -27 69 -22 25 -28 43 -27 76 1 44 -13 56
-35 30z"
          />
        </g>
      </svg>
    </div>
  );
}
