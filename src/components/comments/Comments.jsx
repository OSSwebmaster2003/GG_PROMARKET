import React from 'react';
import stars from "../../assets/media/stars.png";
import "./comment.scss"

function Comments(props) {
  return (
    <div className='comments'>
      <h1>Отзывы</h1>
      <div className="comment">
        <div className="heading">
          <h1>Илона</h1>
          <img src={stars} alt="" />
        </div>
        <div className="info">
          <h2><span>Опыт использования:</span> менее месяца </h2>
          <h2><span>Достоинства:</span> Очень красивая </h2>
          <h2><span>Недостатки:</span> Цена</h2>
          <h2><span>Комментарий:</span> Отличный дизайн, и вписывается в интерьер не более и не менее, чем к.л. другая ванна, наша ли российская или импортная. Дизайн ее же и выручил!!! Аналогичные советские ванны и нынешние российские, имеют те же «сидячие» позы, что и в этой, хотя как там сидеть, для меня было удивительным, в основном, приходится только лежать :-)) Только тут еще и дополнительно выручает имеющийся подголовник, отсутствующий в упомянутых выше. Полезное пространство других ванн, мало того что то же, так еще уменьшается за счет сужения к низу ванны, коего недостатка в этой модели нет. Не говоря уж о том, что спокойно умещаются люди ростом более 180 см :-)) Дополнительно, что касается сравнения со старой советской, то там не только было все почти так же, а еще и узость внизу. Тем, кому пофиг узость низа, и наличие подголовника, тогда в сад к др. моделям. Тому, кому более важен покатый спуск, 
                                        и отсутствие держателя головы, ни вопрос, вам не сюда. Потому что да, соглашусь, спуск более крут чем 
                                        у старых советских
          </h2>
          <h3>05 апреля 2016 в 18:30 </h3>
        </div>
      </div>
      <div className="comment">
        <div className="heading">
          <h1>Сергей</h1>
          <img src={stars} alt="" />
        </div>
        <div className="info">
          <h2><span>Опыт использования:</span> менее месяца </h2>
          <h2><span>Достоинства:</span> Легко чистить, вместительная</h2>
          <h2><span>Недостатки:</span> Не обнаружил</h2>
          <h2><span>Комментарий:</span> Ванну выбирали в первую очередь по надежности, здесь толстая стенка, 7 мм, она хорошо держит тепло. Размер стандартный, 170 см, вписалась в совмещенный санузел очень хорошо. Сидеть-лежать комфортно, форма продуманная. Для чистки используем стандартные средства, поверхность какая гладкая была, такая и осталась.</h2>
          <h3>28 марта 2016 в 18:30  </h3>
        </div>
      </div>
    </div>
  );
}

export default Comments;