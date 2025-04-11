
import * as React from "react";

const SvgExport = ({ width = "100%", height = "100%", className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    className={className}
    viewBox="0 0 27 27"
    {...props}
  >
     <g fill="currentColor" clipPath="url(#Main_svg__a)">
      <path d="M15.374.97q.37.171.743.336l.58.26 1.154.517.382.172.191.085 5.161 2.314.192.086.38.17.893.4.421.189.2.09q.14.06.28.124.077.035.159.07.235.111.468.23v14.66h-1.687v1.634l.422.106c.197.111.34.261.421.474.024.233.02.468.02.702l.004.194c.001.36 0 .615-.235.897-.267.181-.433.237-.763.23l-.356-.005-.385-.004a71 71 0 0 1-1.092-.012 33 33 0 0 0-.67-.005q-.128 0-.255-.005c-.26-.008-.497-.007-.75.065-.14.135-.216.256-.298.43-.266.558-.882.87-1.423 1.108-.755.253-1.63.139-2.337-.186-.602-.306-.977-.73-1.321-1.3v-.105q-1.248-.01-2.497-.01-.58.001-1.16-.004a77 77 0 0 0-1.011-.002q-.268 0-.535-.002-.3-.004-.598 0l-.178-.005c-.17.004-.296.014-.455.076a2 2 0 0 0-.29.431c-.304.57-.963.95-1.562 1.15a3.4 3.4 0 0 1-2.499-.389c-.454-.294-.75-.68-1.027-1.14v-.105l-.09.003q-.206.007-.411.01l-.142.006c-.387.005-.652-.08-.95-.326l-.085-.098-.087-.097c-.26-.42-.26-.85-.255-1.332v-.208l.005-.54.003-.554.008-1.083H.369V6.012c1.03-.47 2.059-.94 3.094-1.398l.934-.418.096-.043.482-.216.958-.43.382-.171 2.294-1.028.191-.086 2.485-1.114.19-.085.705-.315c1.188-.525 2.055-.27 3.194.262m-3.197.734-.495.23-.25.116a64 64 0 0 1-1.434.644l-.172.076q-.468.208-.934.418l-.578.259-.958.43-.382.17-2.294 1.03-.191.085-1.672.75-.282.127c-.421.19-.845.371-1.27.553v13.184h.792v-.21a789 789 0 0 1 .018-2.956l.008-1.339q0-.259.004-.518V14.6c.005-.408.07-.78.339-1.1v-.105l.089-.043c.132-.068.258-.145.385-.22V7.12h21.147v8.7l.79.792c.076.304.103.471.09.77v.208q-.001.271-.01.543-.006.278-.007.557-.004.543-.02 1.086h.792V6.592c-1.335-.613-1.335-.613-2.676-1.214l-.577-.255-.12-.053q-.726-.323-1.45-.65l-.134-.06q-.264-.12-.528-.238l-1.716-.77-.755-.339-.382-.171-1.066-.479-.858-.383-.523-.238-.32-.143-.14-.066c-.874-.388-1.437-.216-2.26.17m-8.38 6.312v5.01h1.635V8.807h16.084v5.906l1.476.053.158.105V8.016zm2.531 1.688v3.322h4.166V9.704h-.79v1.687H7.118V9.704zm1.688 0v.79h.79v-.79zm3.375 0v3.322h4.166V9.704h-.791v1.687h-2.584V9.704zm1.687 0v.79h.791v-.79zm3.375 0v3.322l.791.105c.331.123.544.283.738.58.106.264.106.264.159 1.002h2.478v-5.01h-.79v1.688h-2.585V9.704zm1.688 0v.79h.79v-.79zM3.059 14.08c-.125.172-.119.332-.119.54v.205l.001.462.001.643.001.673.003 1.273.002 1.449q.001 1.49.005 2.981.268.014.537.02l.153.008c.272.011.272.011.513-.096a1.8 1.8 0 0 0 .284-.438c.292-.55.922-.843 1.492-1.031.78-.189 1.629-.108 2.328.3.395.265.738.547.942.983.094.158.142.238.315.304.167.02.326.023.494.02l.19.004q.255.004.512.002.214 0 .43.002.506.003 1.013 0 .522-.003 1.043.004.449.006.897.004.268 0 .535.003c.699.043.699.043 1.346-.157.18-.179.267-.386.37-.617.167-.182.35-.369.578-.466a1 1 0 0 0 .32-.22c.063-.214.055-.424.05-.646l.002-.199q0-.269-.003-.538-.002-.282-.002-.563 0-.474-.004-.946a111 111 0 0 1-.005-1.094 215 215 0 0 0-.008-2.125v-.187l-.003-.172v-.15c-.036-.17-.107-.232-.239-.341-.123-.061-.193-.06-.33-.06h-.471l-.962-.002-1.092-.001h-.681q-.943-.002-1.886-.002h-.613l-1.971-.003a1137 1137 0 0 0-3.16-.003l-1.462-.001H3.87l-.158-.001c-.354.001-.354.001-.653.179M18.14 15.61v5.062h.58c.826.074 1.482.395 2.062.986.104.127.161.247.23.396.096.162.142.238.322.3.171.014.335.012.506.005l.187-.003q.294-.006.588-.016l.4-.007q.489-.01.978-.026.051-.994.074-1.989.01-.462.034-.924c.118-1.683.118-1.683-.592-3.147-.587-.593-1.23-.76-2.048-.776-.4-.002-.796.026-1.195.05zM5.116 22.283a2.17 2.17 0 0 0-.492 1.432c.091.669.384 1.18.893 1.612.5.363 1.056.406 1.655.355.53-.103.973-.423 1.285-.86.338-.563.454-1.13.315-1.781-.191-.59-.604-1.036-1.145-1.33-.91-.406-1.845-.13-2.511.572m11.812 0a2.17 2.17 0 0 0-.491 1.432c.09.669.383 1.18.893 1.612.5.363 1.056.406 1.654.355.53-.103.973-.423 1.286-.86.337-.563.454-1.13.314-1.781-.19-.59-.604-1.036-1.145-1.33-.909-.406-1.844-.13-2.51.572m-13.975.92c-.025.397-.025.397.158.739.203.101.464.055.686.052v-.79zm6.75 0v.791h5.906v-.79zm11.813 0v.791h3.322v-.79z" />
      <path d="M11.338 14.818a3.2 3.2 0 0 1 .6.3l.132.08.139.083c.408.248.808.509 1.206.772q.57.373 1.158.715c.47.276.87.51 1.036 1.056.058.393.027.731-.21 1.055-.296.302-.644.52-1.002.738l-.339.209-.174.107q-.413.254-.822.512l-.158.098q-.38.237-.757.477l-.141.09-.261.168-.117.074-.1.065c-.085.046-.085.046-.19.046v-1.635H3.744V16.4h7.594zm.896 1.635v.844H4.641v1.635h7.593v.896a3 3 0 0 0 .535-.268l.157-.098.165-.105.17-.107c.763-.427.763-.427 1.452-.951.026-.152.026-.152 0-.317a3.6 3.6 0 0 0-.537-.386l-.157-.098-.166-.102-.341-.212-.169-.104-.427-.269-.117-.074-.214-.136c-.163-.112-.163-.112-.35-.148M18.932 16.4l1.542-.066.48-.029c.64-.023 1.17-.004 1.683.414.412.399.648.778.67 1.358-.002.213-.02.417-.038.63l-.066 1.121h-4.271zm.896.897v1.634h2.479c.095-.977.095-.977-.229-1.408-.404-.331-.838-.291-1.337-.262l-.266.007q-.323.01-.647.029M19.459 22.669c.318.348.398.623.39 1.095-.046.405-.241.703-.551.96-.345.205-.715.203-1.104.166-.352-.091-.592-.337-.791-.633-.182-.34-.198-.682-.106-1.054.167-.427.43-.66.844-.844a1.36 1.36 0 0 1 1.318.31m-1.212.692c-.088.148-.088.148-.106.316.069.156.11.24.264.317.188.02.282.023.441-.086.112-.163.118-.248.086-.442a.77.77 0 0 0-.313-.26c-.168-.005-.244.05-.372.155M7.646 22.669c.318.348.398.623.39 1.095-.045.405-.24.703-.55.96-.345.205-.716.203-1.105.166-.352-.091-.592-.337-.79-.633-.182-.34-.198-.682-.106-1.054.167-.427.429-.66.843-.844a1.36 1.36 0 0 1 1.318.31m-1.212.692c-.088.148-.088.148-.106.316.07.156.11.24.264.317.189.02.283.023.442-.086.111-.163.118-.248.086-.442a.77.77 0 0 0-.314-.26c-.167-.005-.244.05-.372.155M17.771 4.106c.318.349.398.624.39 1.095-.046.406-.24.704-.55.96-.345.206-.716.204-1.105.167-.352-.092-.592-.338-.79-.633-.182-.34-.198-.683-.106-1.055.167-.426.429-.66.843-.843a1.36 1.36 0 0 1 1.318.309m-1.212.693c-.088.148-.088.148-.106.316.07.155.11.24.264.316.189.02.283.023.442-.085.111-.163.118-.248.085-.442a.77.77 0 0 0-.313-.26c-.167-.005-.244.05-.372.155M14.396 4.106c.318.349.398.624.39 1.095-.045.406-.24.704-.55.96-.345.206-.716.204-1.105.167-.352-.092-.592-.338-.79-.633-.182-.34-.198-.683-.106-1.055.167-.426.429-.66.844-.843a1.36 1.36 0 0 1 1.317.309m-1.212.693c-.087.148-.087.148-.105.316.069.155.11.24.263.316.189.02.283.023.442-.085.111-.163.118-.248.085-.442a.77.77 0 0 0-.313-.26c-.167-.005-.244.05-.372.155M11.021 4.106c.318.349.398.624.39 1.095-.045.406-.24.704-.55.96-.345.206-.716.204-1.105.167-.352-.092-.592-.338-.79-.633-.182-.34-.198-.683-.106-1.055.167-.426.429-.66.843-.843a1.36 1.36 0 0 1 1.318.309m-1.212.693c-.088.148-.088.148-.106.316.07.155.11.24.264.316.189.02.283.023.442-.085.111-.163.118-.248.085-.442a.77.77 0 0 0-.313-.26c-.167-.005-.244.05-.372.155" />
    </g>
    <defs>
      <clipPath id="Main_svg__a">
        <path fill="currentColor" d="M0 0h27v27H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgExport;


