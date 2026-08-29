import sharp from "sharp";
const SP="C:/Users/click/AppData/Local/Temp/claude/C--Users-click-Downloads-Plamen-project/d3cb5d05-8c85-4937-a506-8a026eb3afa1/scratchpad/ueber";
for (const n of ["ueber-hero","ueber-handwerk","ueber-werte","ueber-gewerke"]) {
  const i=await sharp(SP+"/hd-"+n+".jpg").rotate().resize({width:1600,withoutEnlargement:true}).jpeg({quality:82,mozjpeg:true}).toFile("public/images/"+n+".jpg");
  console.log(n, i.width+"x"+i.height, Math.round(i.size/1024)+"KB");
}
