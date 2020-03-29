import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PaymentService } from "./payment.service";
declare var StripeCheckout: StripeCheckoutStatic;
@Component({
  selector: 'app-main-payment',
  templateUrl: './main-payment.component.html',
  styleUrls: ['./main-payment.component.scss']
})
export class MainPaymentComponent implements OnInit {

  constructor(public PaymentService: PaymentService) { }
  @Input() amount = 19000;
  @Input() items;
  @Input() description;

  handler: StripeCheckoutHandler
  confirmation: any
  loading = false


  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: 'pk_test_JPJnTHzPDxvIZltLaVBtveKH0089gBn1Us',
      image: './../../assets/imgs/black-l.png',
      locale: 'auto',


      token: async (token) => {
        console.log(token)

        var body = {
          stripeTokenId: token.id,
          items: this.items,
          total: this.amount
        }
        this.PaymentService.purchase(body)
        .then(function (data) {
            alert(data.message)
          }).catch(function (error) {
            console.error(error)
          })

      }
    })
  }

  // Open the checkout handler
  async checkout(e) {
    // const user = await this.auth.getUser();
    this.handler.open({
      name: 'Amonak',
      description: this.description,
      amount: this.amount,
      // email: user.email,
    });
    e.preventDefault();
  }

  // Close on navigate
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

}
