var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation

function init() {
  canvas = document.getElementById('canvas')
  anim_container = document.getElementById('animation_container')
  dom_overlay_container = document.getElementById('dom_overlay_container')
  var comp = AdobeAn.getComposition('3D19719345A25C45BBCCE99DF7743749')
  var lib = comp.getLibrary()
  var loader = new createjs.LoadQueue(false)
  loader.addEventListener('fileload', function (evt) {
    handleFileLoad(evt, comp)
  })
  loader.addEventListener('complete', function (evt) {
    handleComplete(evt, comp)
  })
  var lib = comp.getLibrary()
  loader.loadManifest(lib.properties.manifest)
}

function handleFileLoad(evt, comp) {
  var images = comp.getImages()
  if (evt && evt.item.type == 'image') {
    images[evt.item.id] = evt.result
  }
}

function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary()
  var ss = comp.getSpriteSheet()
  var queue = evt.target
  var ssMetadata = lib.ssMetadata
  for (i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames,
    })
  }
  exportRoot = new lib.panda()
  stage = new lib.Stage(canvas)
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot)
    // ========= 生成物件 =========
    // 創出熊貓物件
    var user = [
      new lib.userPanda01(),
      new lib.userPanda02(),
      new lib.userPanda03(),
      new lib.userPanda04(),
      new lib.userPanda05(),
      new lib.userPanda06(),
    ]
    //創出跑步煙霧物件
    var smoke = [new lib.smoke(), new lib.smoke(), new lib.smoke(), new lib.smoke(), new lib.smoke(), new lib.smoke()]

    // =========================================================
    // 產生障礙物位置(不重複 + 小至大排序)
    var siteArray = [35, 72, 109, 146, 183, 220]
    var newArray = []
    function done(num, arr, newArr) {
      for (var index = 0; index < num; index++) {
        var n = Math.floor(Math.random() * arr.length)
        newArr.push(arr[n])
        arr.splice(n, 1)
      }
      return arr + ''
    }
    done(3, siteArray, newArray)
    newArray = newArray.sort(function (a, b) {
      return a - b
    })
    var contrast = [35, 72, 109, 146, 183, 220]

    //創出障礙物物件(2個炸彈 + 1個香蕉)
    var obstacle = [
      [
        { obj: new lib.playBomb(), name: 'bomb' },
        { obj: new lib.playBomb(), name: 'bomb2' },
        { obj: new lib.banana(), name: 'banana' },
      ],
      [
        { obj: new lib.playBomb(), name: 'bomb' },
        { obj: new lib.banana(), name: 'banana' },
        { obj: new lib.playBomb(), name: 'bomb2' },
      ],
      [
        { obj: new lib.banana(), name: 'banana' },
        { obj: new lib.playBomb(), name: 'bomb' },
        { obj: new lib.playBomb(), name: 'bomb2' },
      ],
    ]
    var newObstacle = obstacle[parseInt(Math.random() * 3)]

    // =========================================================
    // 將熊貓物件add至舞台上-1，並給予座標
    for (var i = 0; i < 4; i++) {
      var value, value1
      switch (i) {
        case 0:
          value = 0
          value1 = contrast.indexOf(newArray[0]) + 1
          break
        case 1:
          value = contrast.indexOf(newArray[0]) + 1
          value1 = contrast.indexOf(newArray[1])
          break
        case 2:
          value = contrast.indexOf(newArray[1])
          value1 = contrast.indexOf(newArray[2])
          break
        case 3:
          value = contrast.indexOf(newArray[2])
          value1 = 6
          break
      }

      for (var k = value; k < value1; k++) {
        exportRoot.addChild(user[k])
        exportRoot.addChild(smoke[k])
        user[k].x = 10 + k * 120
        user[k].y = 190
      }

      if (i < 3) {
        exportRoot.addChild(newObstacle[i].obj)
        newObstacle[i].obj.y = newArray[i]
        newObstacle[i].obj.x = 715
      }
    }

    // 創出草叢物件，add至舞台上並給予座標
    var lawn = new lib.lawn()
    exportRoot.addChild(lawn)
    lawn.x = 0
    lawn.y = 279

    // ========= 動作分解 =========
    // 舞台進入捲動，熊貓進入停止動作
    setTimeout(() => {
      exportRoot.gotoAndPlay(0)
      for (var i = 0; i < 6; i++) {
        user[i].gotoAndPlay('stop')
        user[i].x = 10
        user[i].y = 20 + i * 37

        smoke[i].x = 0
        smoke[i].y = 80 + i * 37
      }
    }, 6000)

    function playObstacle(e) {
      switch (newObstacle[e].name) {
        case 'bomb':
          playBomb(e)
          break
        case 'bomb2':
          playBomb2(e)
          break
        case 'banana':
          playBanana(e)
          break
      }
    }

    //熊貓進入預備跑步
    setTimeout(() => {
      for (var i = 0; i < 6; i++) {
        user[i].gotoAndPlay('ready')
        smoke[i].gotoAndPlay('smokePlay')
      }
      lawn.gotoAndPlay('lawnPlay')
      pandaClimb()
    }, 11000)

    var pandaRun01
    setTimeout(() => {
      pandaRun01 = setInterval(function () {
        for (var i = 0; i < 6; i++) {
          user[i].x++
          playSmoke(i)
        }
      }, 10)
      playObstacle(0)
    }, 11100)

    // 熊貓進入亂數移動
    var pandaRan = []
    setTimeout(() => {
      clearInterval(pandaRun01)
      pandaRan[0] = setInterval(() => {
        pandaRandom(0, 100)
      }, 10)
      pandaRan[1] = setInterval(() => {
        pandaRandom(1, 100)
      }, 10)
      pandaRan[2] = setInterval(() => {
        pandaRandom(2, 100)
      }, 10)
      pandaRan[3] = setInterval(() => {
        pandaRandom(3, 100)
      }, 10)
      pandaRan[4] = setInterval(() => {
        pandaRandom(4, 100)
      }, 10)
      pandaRan[5] = setInterval(() => {
        pandaRandom(5, 100)
      }, 10)
    }, 12500)

    setTimeout(() => {
      playObstacle(1)
    }, 14500)

    setTimeout(() => {
      playObstacle(2)
      pandaRan[0] = setInterval(() => {
        pandaRandom(0, 250)
      }, 10)
      pandaRan[1] = setInterval(() => {
        pandaRandom(1, 250)
      }, 10)
      pandaRan[2] = setInterval(() => {
        pandaRandom(2, 250)
      }, 10)
      pandaRan[3] = setInterval(() => {
        pandaRandom(3, 250)
      }, 10)
      pandaRan[4] = setInterval(() => {
        pandaRandom(4, 250)
      }, 10)
      pandaRan[5] = setInterval(() => {
        pandaRandom(5, 250)
      }, 10)
    }, 15500)

    //熊貓進入最後衝刺
    var pandaRun02
    setTimeout(() => {
      for (var i = 0; i < 6; i++) {
        clearInterval(pandaRan[i])
      }
      pandaRun02 = setInterval(() => {
        for (var k = 0; k < 6; k++) {
          user[k].x++
          playSmoke(k)
          if (user[k].x >= 715) {
            exportRoot.removeChild(user[k])
            exportRoot.removeChild(smoke[k])
          }
        }
      }, 10)
    }, 25500)

    var showRank
    setTimeout(() => {
      $('#result_gold').addClass(`result_c${$(user).index(showRank[0].id) + 1}`)
      $('#result_silver').addClass(`result_c${$(user).index(showRank[1].id) + 1}`)
      $('#win').addClass('on')
    }, 28000)

    // ========= 函式 =========
    //熊貓隨機移動函式
    function pandaRandom(e, z) {
      var climbRan = parseInt(Math.random() * 5) - parseInt(Math.random() * 5)
      user[e].x += user[e].x + climbRan > z && user[e].x + climbRan < 500 ? climbRan : 0.5
      playSmoke(e)
    }

    //炸彈函式(移動 + 碰撞判定)
    var pandaDie, pandaDie2, pandaDie3, pandaDie4
    var bombTime, bombTime2
    function playBomb(e) {
      bombTime = setInterval(() => {
        newObstacle[e].obj.x--
        if (newObstacle[e].obj.x <= user[contrast.indexOf(newArray[e])].x + 25) {
          clearInterval(bombTime)
          newObstacle[e].obj.gotoAndPlay('stopBomb')
          smoke[contrast.indexOf(newArray[e])].gotoAndPlay('smokeStop')

          setTimeout(() => {
            exportRoot.removeChild(newObstacle[e].obj)
          }, 1000)
          goDie(contrast.indexOf(newArray[e]), pandaDie, pandaDie2)
        }
      }, 10)
    }

    function playBomb2(e) {
      bombTime2 = setInterval(() => {
        newObstacle[e].obj.x--
        if (newObstacle[e].obj.x <= user[contrast.indexOf(newArray[e])].x + 25) {
          clearInterval(bombTime2)
          newObstacle[e].obj.gotoAndPlay('stopBomb')
          smoke[contrast.indexOf(newArray[e])].gotoAndPlay('smokeStop')

          setTimeout(() => {
            exportRoot.removeChild(newObstacle[e].obj)
          }, 1000)
          goDie(contrast.indexOf(newArray[e]), pandaDie3, pandaDie4)
        }
      }, 10)
    }

    //香蕉函式(移動 + 碰撞判定)
    var bananaTime, bananaTime2
    var baneneStatus = true
    function playBanana(e) {
      bananaTime = setInterval(() => {
        if (baneneStatus) {
          newObstacle[e].obj.x--
        }
        if (newObstacle[e].obj.x <= user[contrast.indexOf(newArray[e])].x + 25) {
          clearInterval(bananaTime)

          if (baneneStatus) {
            bananaLeave(e)
            newObstacle[e].obj.gotoAndPlay('bananaPlay')
            goFall(contrast.indexOf(newArray[e]))
            baneneStatus = false
          }
        }
      }, 10)
    }
    function bananaLeave(e) {
      bananaTime2 = setInterval(() => {
        newObstacle[e].obj.y -= 2
        newObstacle[e].obj.x -= 2

        if (newObstacle[e].obj.y < -50) {
          exportRoot.removeChild(newObstacle[e].obj)
          clearInterval(bananaTime2)
        }
      }, 10)
    }

    //熊貓碰撞流程函式
    function goDie(e, var1, var2) {
      clearInterval(pandaRan[e])
      user[e].gotoAndPlay('die')
      var1 = setInterval(() => {
        user[e].x--
      }, 10)
      setTimeout(() => {
        clearInterval(var1)
        var2 = setInterval(() => {
          user[e].x++
        }, 10)
      }, 1800)

      setTimeout(() => {
        clearInterval(var2)
        smoke[e].gotoAndPlay('smokePlay')
        pandaRan[e] = setInterval(() => {
          pandaRandom(e, 250)
        }, 10)
      }, 2800)
    }
    //熊貓跌倒流程函式
    var pananaFall
    function goFall(e) {
      clearInterval(pandaRan[e])
      user[e].gotoAndPlay('fall')
      pananaFall = setInterval(() => {
        user[e].x--
      }, 10)
      setTimeout(() => {
        clearInterval(pananaFall)
        pandaRan[e] = setInterval(() => {
          pandaRandom(e, 250)
        }, 10)
      }, 1400)
    }

    // 煙霧位置函式
    function playSmoke(e) {
      smoke[e].x = user[e].x - 50
    }

    // 即時更新熊貓名次函式
    function pandaClimb() {
      setInterval(() => {
        var ranking = []
        $(user).each(function () {
          ranking.push({ id: this, value: this.x })
        })
        showRank = ranking.sort(function (a, b) {
          return b.value - a.value
        })
        for (var i = 0; i < 6; i++) {
          var name = 'rankImg_' + ($(user).index(showRank[i].id) + 1)
          $(`#rank_${i + 1}`)
            .removeClass()
            .addClass(`${name}`)
        }
      }, 100)
    }

    $('#musicBtn').click(function () {
      $(this).toggleClass('on')
    })

    createjs.Ticker.framerate = lib.properties.fps
    createjs.Ticker.addEventListener('tick', stage)
  }
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container])
  AdobeAn.compositionLoaded(lib.properties.id)
  fnStartAnimation()
}
