/*O jogo consiste em uma quiz de perguntas sobre as misturas de cores primárias e secundárias, uma vez no menu do jogo, o jogador, através do teclado se movimentará pelo jogo e fará suas escolhas. Quando pressionado o botão jogar o jogador será direcionado para a primeira fase, onde encontrará uma pergunta e também três opções de escolha e 3 vidas, que se igualam a 3 chances para errar. Ao decorrer do jogo dependendo do resultado da resposta, ele avançara pelas fases, ou o jogo reiniciará assim que acabrem as suas vidas.*/
var vco=[200,140,70,255]
/*var x = 200;
var y = 140;
let a = 70;
let b = 255;*/
var vim=['imagem_fase1.png','plano de fundo.jpg','coração-preto.png','pintor-jogo.png','enterkey.png','fogos2.png','sadface.png','marcospic.jpg','imagem_2022-02-19_020119.png']
let img;
let pic;
let heart;
let painter;
let enter;
let firework;
let sadface;
let marcpic;
let elisapic;
var opcao = 1;
var tela = 0;
cont=3



//imagens 
function preload() {
  img = loadImage(vim[0]);
  pic= loadImage(vim[1])
  heart=loadImage(vim[2])
  painter=loadImage(vim[3])
  enter=loadImage(vim[4])
  firework=loadImage(vim[5])
  sadface=loadImage(vim[6])
  marcpic=loadImage(vim[7])
  elisapic=loadImage(vim[8])
}

function setup() {
  createCanvas(600, 400);
  
}

//lógica de troca de tela e seleção
function draw() {
  background('white');
  if (tela == 0) menu(),rainbow();
  if (tela == 1) fase1();
  if (tela == 2) intrucoes();
  if (tela == 3) creditos();
  if (tela == 4) fase2();
  if (tela == 5) fase3();
  if (tela == 6) fase4();
  if (tela == 7) fase5();
  if (tela == 8) fase6();
  if (tela == 9) fasefinal();
  if (tela == 10) congratulations();
  if (tela == 11) lost();
//desenho de plano de fundo do menu feito com estrutura de repetição  
  function rainbow(){
   noStroke();

 translate(290, 200);
for(i=0;i<20;i++)
 {
    fill('#3cb371')
    circle(150, 200, 20);
   fill('#77193e')
   circle(150, 230, 20);
   fill('lightblue')
   circle(150, 170, 20);
   fill('#ff6961')
   circle(150, 260, 20);

  rotate(PI/10);

  
   }
 }
}

function menu() {
  
  image(pic,0,0)
  stroke(200)
  fill('none')
  rect(vco[0], vco[1], 175, 60,20);
  textSize(50);
  noStroke();
  fill('black')
  text("ADIVINHE A COR", 100, 100); 
  textSize(32);
  fill('black')
  text("Jogar", 245, 180);
  text("Instruções", 210, 240);
  text("Créditos", 225, 300); 
  
  
}
//modelo base de fase, pode ser alterado
function fase1() {
  image(img,-10,-20)
  image(heart,520,8)
  image(painter,180,240)
  fill('yellow');
  circle(100, 150, 75)
  fill('red');
  circle(220, 150, 75)
  fill('black')
  textSize(30);
  text("Qual é a cor?", 80, 80);
  text("+",150, 160)
  textSize(25);
  stroke(20)
  fill('none')
  rect(vco[2],vco[3], 120, 40,20)
  fill('purple')
  text("roxo", 100, 280)
  fill(' #FF00FF')
  text("rosa",100,320)
  fill('orange')
  text("laranja",90,360)
  fill('black');
  textSize(20)
  text("FASE 1",20, 30);
  text(" "+cont,550, 30)
  
 
}

function fase2(){
  image(img,-10,-20)
  image(heart,520,8)
  image(painter,180,240)
  fill('yellow');
  circle(100, 150, 75)
  fill('blue');
  circle(220, 150, 75)
  fill('black')
  textSize(30);
  text("Qual é a cor?", 80, 80);
  text("+",150, 160)
  textSize(25);
  stroke(20)
  fill('none')
  rect(vco[2],vco[3], 120, 40,20)
  fill('green')
  text("verde", 100, 280)
  fill('cyan')
  text("ciano",100,320)
  fill('red')
  text("vermelho",80,360)
  fill('black');
  textSize(20)
  text("FASE 2",20, 30);
  text(" "+cont,550, 30)
   
  
  
}
function fase3(){
  image(img,-10,-20)
  image(heart,520,8)
  image(painter,180,240)
  fill('red');
  circle(100, 150, 75)
  fill('green');
  circle(220, 150, 75)
  fill('black')
  textSize(30);
  text("Qual é a cor?", 80, 80);
  text("+",150, 160)
  textSize(25);
  stroke(20)
  fill('none')
  rect(vco[2],vco[3], 120, 40,20)
  fill(' #FF00FF')
  text("rosa", 100, 280)
  fill('yellow')
  text("amarelo",90,320)
  fill('grey')
  text("cinza",100,360)
  fill('black');
  textSize(20)
  text("FASE 3",20, 30);
  text(" "+cont,550, 30)
  
}
function fase4(){
  image(img,-10,-20)
  image(heart,520,8)
  image(painter,180,240)
  fill('#FF0000');
  circle(100, 150, 75)
  fill('blue');
  circle(220, 150, 75)
  fill('black')
  textSize(30);
  text("Qual é a cor?", 80, 80);
  text("+",150, 160)
  textSize(25);
  stroke(20)
  fill('none')
  rect(vco[2],vco[3], 120, 40,20)
  fill('orange')
  text("laranja", 100, 280)
  fill('cyan')
  text("ciano",100,320)
  fill('purple')
  text("roxo",110,360)
  fill('black');
  textSize(20)
  text("FASE 4",20, 30);
  text(" "+cont,550, 30)
    
}
function fase5() {
  image(img,-10,-20)
  image(heart,520,8)
  image(painter,180,240)
  fill('green');
  circle(100, 150, 75)
  fill('blue');
  circle(220, 150, 75)
  fill('black')
  textSize(30);
  text("Qual é a cor?", 80, 80);
  text("+",150, 160)
  textSize(25);
  stroke(20)
  fill('none')
  rect(vco[2],vco[3], 120, 40,20)
  fill('cyan')
  text("ciano", 100, 280)
  fill('black')
  text("preto",100,320)
  fill('#3cb371')
  text("verde mar",75,360)
  fill('black');
  textSize(20)
  text("FASE 5",20, 30);
  text(" "+cont,550, 30)
  
 
}
function fase6() {
  image(img,-10,-20)
  image(heart,520,8)
  image(painter,180,240)
  fill('black');
  circle(100, 150, 75)
  fill('white');
  circle(220, 150, 75)
  fill('black')
  textSize(30);
  text("Qual é a cor?", 80, 80);
  text("+",150, 160)
  textSize(25);
  stroke(20)
  fill('none')
  rect(vco[2],vco[3], 120, 40,20)
  fill('grey')
  text("cinza", 100, 280)
  fill('blue')
  text("azul",100,320)
  fill('yellow')
  text("amarelo",85,360)
  fill('black');
  textSize(20)
  text("FASE 6",20, 30);
  text(" "+cont,550, 30)
  
 
}
function fasefinal() {
  image(img,-10,-20)
  image(heart,520,8)
  image(painter,180,240)
  fill('red');
  circle(270, 150, 75)
  fill('blue');
  circle(70, 150, 75)
  fill('yellow');
  circle(170, 150, 75)
  fill('black')
  textSize(30);
  text("Qual é a cor?", 80, 80);
  text("+",110, 160)
  text("+",210, 160)
  textSize(25);
  stroke(20)
  fill('none')
  rect(vco[2],vco[3], 120, 40,20)
  fill('black')
  text("preto", 100, 280)
  fill('white')
  text("branco",95,320)
  fill('brown')
  text("marrom",90,360)
  fill('black');
  textSize(20)
  text("FASE FINAL",130, 30);
  text(" "+cont,550, 30)
  
 
}
function congratulations(){
  background('black')
  image(firework,-10,0)
  fill('white')
  textSize(50)
  text("Parabéns!",170,100,50,50)
  textSize(40)
  text("Você é o Mestre das Cores!",70,220)
  textSize(25)
  text("aperte Esc para retornar ao menu",140,300)
}
function lost(){
  background('lightblue')
  image(sadface,370,100)
  textSize(40)
  text("Você perdeu",70,180)
  text("tente novamente!",40,230)
  textSize(20)
  text("aperte Esc para retornar ao menu",140,300)
}

 
// instruções ainda em andamento, tendo em vista que o jogo pode mudar
function intrucoes() {
  image(img,0,0)
  image(enter,148,92)
  fill('black')
  textSize(30)
  textAlign(LEFT)
  noStroke()
  text("Controles:",30,50)
  textSize(20)
  text("Use as setas para cima e para baixo, para movimentar-se.",10, 90)
  text("A tecla ENTER       será utilizada para seleção da devida opção.",10, 115)
  textSize(30)
  text("Como jogar:",30,200)
  textSize(20)
  text("O jogo é um quiz sobre misturas de cores primárias e secundárias.", 10, 240)
  text("O seu objetivo é responder corretamente a cada pergunta feita",10,260)
  text("sobre as misturas, porém, você terá apenas 3 vidas. Caso",10,280)
  text("você erre, o jogo reiniciará. Boa sorte!",10,300)
  
}

function creditos() {
  image(img,0,0)
  image(marcpic,240,100,80,80)
  image(elisapic,240,250,80,80)
  fill('black')
  textSize(30);
  text("Créditos", 250, 50);
  text("Programador: Marcos", 170, 80);
  text("Educadora: Elisa",170,220)
}
//lógica geral do jogo, de mvimentação e seleção de escolha
function keyPressed() {
  if (key == "ArrowUp" && vco[1] > 180) {
    let aux=vco[1]
    vco[1] = aux - 60;
    opcao = opcao - 1;
  }
  if (key == "ArrowDown" && vco[1] < 250) {
    let aux=vco[1]
    vco[1] = aux + 60;
    opcao = opcao + 1;
    console.log(opcao);
  }
  if (key == "Enter" && tela==0) {
    tela = opcao;
    cont++
  }
  //jogar novamente/voltar para tela inicial
  if (key == "Escape") {
    tela = 0;
    cont=3
  }
  if(key == "ArrowUp" && vco[3] > 280){
    let aux=vco[3]
    vco[3]=aux-40
  }
  if(key == "ArrowDown" && vco[3] <300){
    let aux=vco[3]
    vco[3]=aux+40
  }
//fase 1
  if(key == "Enter" && opcao==3 && tela == 1){
    key=" "
    tela=4
  }
  else if(key == "Enter" && (opcao == 1 || opcao == 2) && tela == 1){
    tela=1
    cont--
    
   }
//fase2  
  if(key == "Enter" && opcao==1 && tela == 4){
    key=" "
    tela=5
  }
  else if(key == "Enter" && (opcao == 2 || opcao == 3) && tela==4){
    tela=4
    cont--
    
   }
//fase3  
   if(key == "Enter" && opcao==2 && tela == 5){
    key=" "
    tela=6
  }
  else if(key == "Enter" && (opcao == 1 || opcao == 3) && tela==5){
    tela=5
    cont--
    
   }
//fase4
  if(key == "Enter" && opcao==3 && tela == 6){
    key=" "
    tela=7
  }
  else if(key == "Enter" && (opcao == 1 || opcao == 2) && tela==6){
    tela=6
    cont--
    
   }
//fase5  
  if(key == "Enter" && opcao==1 && tela == 7){
    key=" "
    tela=8
  }
  else if(key == "Enter" && (opcao == 2 || opcao == 3) && tela==7){
    tela=7
    cont--
    
   }
//fase 6  
if(key == "Enter" && opcao==1 && tela == 8){
    key=" "
    tela=9
  }
  else if(key == "Enter" && (opcao == 2 || opcao == 3) && tela==8){
    tela=8
    cont--   
   }  
//fasefinal
  if(key == "Enter" && opcao==3 && tela == 9){
    key=" "
    tela=10
  }
  else if(key == "Enter" && (opcao == 1 || opcao == 2) && tela==9){
    tela=9
    cont--
    
   }  
  
  
  
  
  
  //restar do jogo
  if(cont==0){
    tela=11
    cont=3
    opcao=1
    
  }
}

