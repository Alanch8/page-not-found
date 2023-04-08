import { Component } from '@angular/core';

@Component({
  selector: 'lib-alanch8-pageNotFound',
  template: `
    <section class="page_404">
      <div class="container">
        <div>
          <div class="text-centered">
            <h1 class="title">404</h1>
            <div class="d-flex justify-content-center">
              <div class="bg_404"></div>
            </div>
            <div class="content_404">
              <h3>Look like you're lost,</h3>
              <p>the page you are looking for is not avaible!</p>
            </div>
            <button class="btn btn-secondary"><a class="home" href="#">Go to Home</a></button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .page_404 {
        padding: 40px 4px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .container {
        width: 1330px;
        --bs-gutter-x: 0rem;
      }
      .text-centered {
        text-align: center;
      }
      .bg_404 {
        background-image: url(https://images.squarespace-cdn.com/content/v1/5f071e67133a487a834f112a/1605183347914-O4E2G9DS8ABKGT63ADKX/confused.gif);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 400px;
        width: 400px;
      }
      .content_404 {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-size: 80px;
      }
      .home {
        color: white;
        text-decoration: none;
      }
    `,
  ],
})
export class Alanch8PageNotFoundComponent {}
