namespace SpriteKind {
    export const Bouncepad = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bouncepad, function (sprite, otherSprite) {
    sprite.vy = sprite.vy * -1
    otherSprite.setPosition(randint(10, 150), randint(50, 110))
})
scene.setBackgroundColor(9)
let 主角 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let 跳床 = sprites.create(img`
    ...cccccccccccccccccc...
    ..cd5555555555555555dc..
    .c55555555555555555555c.
    .c55333333333333333355c.
    .c53333333333333333335c.
    .c53333333333333333335c.
    c333cccccccccccccccc333c
    c55c3555555555555553c55c
    c55c5555555555555555c55c
    c55c5555555555555555c55c
    c55c5555555555555555c55c
    c35c5555555555555555c53c
    cc33333333333333333333cc
    cc33333333333333333333cc
    cccccccccccccccccccccccc
    ..cbbc............cbbc..
    `, SpriteKind.Bouncepad)
跳床.y = 110
主角.ay = 50
主角.y = 0
controller.moveSprite(主角, 100, 0)
