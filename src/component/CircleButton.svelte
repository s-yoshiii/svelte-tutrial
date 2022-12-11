<script></script>

<a href="/" class="circleBtnWrap">
  <div class="circleBtnWrap__inner">
    <div class="circleBtn">
      <svg viewBox="0 0 110 110">
        <circle cx="50%" cy="50%" r="54" />
      </svg>
    </div>
    <div class="circleBtn__txt">リンク名</div>
  </div>
</a>

<style lang="scss">
  .circleBtnWrap {
    display: inline-block;
    &__inner {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .circleBtn {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(193, 33, 43, 0.4);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      transition: all 1.5s cubic-bezier(0.23, 1, 0.32, 1), border 0.3s ease;
      .circleBtnWrap:hover & {
        opacity: 0;
      }
    }
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: "";
      display: block;
      background: url("data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2212%22%20height%3D%229%22%20viewBox%3D%220%200%2012%209%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.71776e-08%203.4299L10.2689%203.4299L10.2689%204.91288L2.54155e-09%204.91288L1.71776e-08%203.4299Z%22%20fill%3D%22%23C1212B%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.9801%204.94096C10.0261%204.94096%208.4514%206.49423%208.4514%208.39893L6.9514%208.39893C6.9514%205.66503%209.20799%203.45798%2011.9801%203.45798L11.9801%204.94096Z%22%20fill%3D%22%23C1212B%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.9801%203.45798C10.0261%203.45798%208.4514%201.9047%208.4514%202.76856e-07L6.9514%203.74775e-09C6.9514%202.7339%209.20798%204.94096%2011.9801%204.94096L11.9801%203.45798Z%22%20fill%3D%22%23C1212B%22%2F%3E%3C%2Fsvg%3E")
        center center no-repeat;
      background-size: contain;
      width: 15px;
      height: 10px;
      transform: translate(-50%, -50%);
    }
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 104px;
      height: 104px;
      margin: -2px;
      opacity: 0;
      transform: rotate(-90deg);
      transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      .circleBtnWrap:hover & {
        opacity: 1;
      }
      circle {
        stroke: #c1212b;
        fill: transparent;
        stroke-width: 1px;
        transition: stroke-dashoffset 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        stroke-dashoffset: 346px;
        stroke-dasharray: 346px;
        backface-visibility: hidden;
        .circleBtnWrap:hover & {
          stroke-dashoffset: 0;
        }
      }
    }
    &__txt {
      font-weight: bold;
      padding-left: 1em;
      color: #c1212b;
    }
  }
</style>
