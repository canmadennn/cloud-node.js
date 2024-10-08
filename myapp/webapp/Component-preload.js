sap.ui.define([], function () {
	"use strict";

	// Bu dosya yalnızca ön yükleme için kullanılır.
	// Burada herhangi bir işlevsel kod eklemeyin.
	// Uygulamanızdaki bileşenlerin önceden yüklenmesini sağlamak için
	// bileşenlerin tanımlandığı modülleri içe aktarın.

	// Örnek olarak uygulama bileşenlerini içe aktarın
	sap.ui.require([
		"myapp/Component", // Uygulama bileşeninin tanımlandığı modül
		"myapp/controller/App.controller", // Uygulamanızın kontrolcüsü
		"myapp/view/App.view" // Uygulamanızın görünümü
		// İhtiyaca göre daha fazla modül eklenebilir
	]);

	return {}; // Boş bir nesne döndürün
});
