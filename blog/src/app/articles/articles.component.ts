import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  articles:Array<Object> = [{
    'title': 'Article One',
    'subTitle': 'the first article',
    'body': 'Maecenas eu tortor a tellus tempor ornare a non leo. Etiam feugiat mauris a nisi consequat tincidunt. Proin nec euismod nulla. Praesent sit amet erat volutpat, mattis nibh non, pulvinar nulla. Proin lacinia interdum placerat. Pellentesque congue pellentesque iaculis. Nullam id tincidunt ligula. Mauris consectetur volutpat pellentesque. In hac habitasse platea dictumst.'
  }, {
    'title': 'Article Two',
    'subTitle': 'the second article',
    'body': 'Etiam condimentum, ante quis elementum elementum, quam diam faucibus risus, in accumsan libero augue vitae sapien. Donec vitae justo sed velit scelerisque venenatis. Nam ligula elit, aliquam at luctus eget, elementum non arcu. Sed et est efficitur, posuere erat non, faucibus ipsum. Morbi nec tristique orci. Donec pulvinar nisl nec dui cursus ultrices. Suspendisse dictum eros venenatis auctor volutpat. Fusce in aliquet tortor. Fusce lectus sem, mollis sed dictum nec, ultricies interdum nunc.'
  }, {
    'title': 'Article Three',
    'subTitle': 'the third article',
    'body': 'Etiam condimentum, ante quis elementum elementum, quam diam faucibus risus, in accumsan libero augue vitae sapien. Donec vitae justo sed velit scelerisque venenatis. Nam ligula elit, aliquam at luctus eget, elementum non arcu. Sed et est efficitur, posuere erat non, faucibus ipsum. Morbi nec tristique orci. Donec pulvinar nisl nec dui cursus ultrices. Suspendisse dictum eros venenatis auctor volutpat. Fusce in aliquet tortor. Fusce lectus sem, mollis sed dictum nec, ultricies interdum nunc.'
  }, {
    'title': 'Article Four',
    'subTitle': 'the fourth article',
    'body': 'Etiam condimentum, ante quis elementum elementum, quam diam faucibus risus, in accumsan libero augue vitae sapien. Donec vitae justo sed velit scelerisque venenatis. Nam ligula elit, aliquam at luctus eget, elementum non arcu. Sed et est efficitur, posuere erat non, faucibus ipsum. Morbi nec tristique orci. Donec pulvinar nisl nec dui cursus ultrices. Suspendisse dictum eros venenatis auctor volutpat. Fusce in aliquet tortor. Fusce lectus sem, mollis sed dictum nec, ultricies interdum nunc.'
  }, {
    'title': 'Article five',
    'subTitle': 'the Fifth article',
    'body': 'Etiam condimentum, ante quis elementum elementum, quam diam faucibus risus, in accumsan libero augue vitae sapien. Donec vitae justo sed velit scelerisque venenatis. Nam ligula elit, aliquam at luctus eget, elementum non arcu. Sed et est efficitur, posuere erat non, faucibus ipsum. Morbi nec tristique orci. Donec pulvinar nisl nec dui cursus ultrices. Suspendisse dictum eros venenatis auctor volutpat. Fusce in aliquet tortor. Fusce lectus sem, mollis sed dictum nec, ultricies interdum nunc.'
  }]
}
