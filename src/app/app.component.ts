import { Component } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-root",
  template: `
    <ng-container *transloco="let t">
      <div style="text-align:center" class="content">
        <h1>
          {{ t("title", { app: title }) }}
        </h1>
        <span style="display: block">
          {{ t("body", { app: title }) }}
        </span>
        <img
          width="300"
          alt="Angular Logo"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
        />
      </div>
    </ng-container>
  `,
  styles: [],
})
export class AppComponent {
  title = "angular-storybook-i18n-example";

  constructor(private translationService: TranslocoService) {}
}
