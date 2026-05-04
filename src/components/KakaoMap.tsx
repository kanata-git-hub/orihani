import React from 'react';

export default function KakaoMap() {
  return (
    <div className="flex justify-center mb-6 max-w-[280px] overflow-hidden rounded-xl bg-white mx-auto md:mx-0">
      <div style={{font:"normal normal 400 12px/normal dotum, sans-serif", width:"280px", height:"264px", color:"#333", position:"relative"}}>
        <div style={{height: "232px"}}>
          <a href="https://map.kakao.com/?urlX=866964.0000000577&amp;urlY=662087.9999999993&amp;itemId=1335391663&amp;q=%EC%98%A4%EB%A6%AC%ED%95%9C%EC%9D%98%EC%9B%90&amp;srcid=1335391663&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank" rel="noreferrer">
            <img className="map" src="http://t1.daumcdn.net/roughmap/imgmap/2d8d87a7e4247d2e94c3f4727a1bc7d00b0de24522967ae8eb97d7f36d7a86f3" width="278" height="230" style={{border:"1px solid #ccc"}} alt="지도"/>
          </a>
        </div>
        <div style={{overflow: "hidden", padding: "7px 11px", border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "0px 0px 2px 2px", backgroundColor: "rgb(249, 249, 249)"}}>
          <a href="https://map.kakao.com" target="_blank" rel="noreferrer" style={{float: "left"}}>
            <img src="//t1.kakaocdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style={{display:"block",width:"72px",height:"16px"}}/>
          </a>
          <div style={{float: "right", position: "relative", top: "1px", fontSize: "11px"}}>
            <a target="_blank" rel="noreferrer" href="https://map.kakao.com/?from=roughmap&amp;srcid=1335391663&amp;confirmid=1335391663&amp;q=%EC%98%A4%EB%A6%AC%ED%95%9C%EC%9D%98%EC%9B%90&amp;rv=on" style={{float:"left",height:"15px",paddingTop:"1px",lineHeight:"15px",color:"#000",textDecoration: "none"}}>로드뷰</a>
            <span style={{width: "1px",padding: "0",margin: "0 8px 0 9px",height: "11px",verticalAlign: "top",position: "relative",top: "2px",borderLeft: "1px solid #d0d0d0",float: "left"}}></span>
            <a target="_blank" rel="noreferrer" href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%98%A4%EB%A6%AC%ED%95%9C%EC%9D%98%EC%9B%90&amp;eX=866964.0000000577&amp;eY=662087.9999999993" style={{float:"left",height:"15px",paddingTop:"1px",lineHeight:"15px",color:"#000",textDecoration: "none"}}>길찾기</a>
            <span style={{width: "1px",padding: "0",margin: "0 8px 0 9px",height: "11px",verticalAlign: "top",position: "relative",top: "2px",borderLeft: "1px solid #d0d0d0",float: "left"}}></span>
            <a target="_blank" rel="noreferrer" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1335391663&amp;itemId=1335391663&amp;q=%EC%98%A4%EB%A6%AC%ED%95%9C%EC%9D%98%EC%9B%90&amp;urlX=866964.0000000577&amp;urlY=662087.9999999993" style={{float:"left",height:"15px",paddingTop:"1px",lineHeight:"15px",color:"#000",textDecoration: "none"}}>지도 크게 보기</a>
          </div>
        </div>
        <div>
          <span style={{borderBottom:"0px none #333333",position:"absolute",left:"-25px",top:"-136px",width:"0px",height:"40px"}}></span>
        </div>
      </div>
    </div>
  );
}
