const addAssetButton = () => {
	console.log('addAssetButton');

	const addAssetDiv = document.getElementById('addAssetModal');

	addAssetDiv.style.display = 'block';
	document.body.style.marginBottom = '0px';
};

const closeLogAsset = () => {
	console.log('closeLogAsset');

	const addAssetDiv = document.getElementById('addAssetModal');

	addAssetDiv.style.display = 'none';
	document.body.style.marginBottom = '130px';
};

const editAssetButton = () => {
	console.log('editAssetButton');

	const editAssetDiv = document.getElementById('editAssetModal');

	editAssetDiv.style.display = 'block';
	document.body.style.marginBottom = '0px';
};

const closeEditAsset = () => {
	console.log('closeEditAsset');

	const editAssetDiv = document.getElementById('editAssetModal');

	editAssetDiv.style.display = 'none';
	document.body.style.marginBottom = '130px';
};

const openGenerateBarcode = () => {
	console.log('generateBarcode');

	const generateBarcodeDiv = document.getElementById('generateBarcodeModal');

	generateBarcodeDiv.style.display = 'block';
};

const closeGenerateBarcode = () => {
	console.log('closeGenerateBarcode');

	const generateBarcodeDiv = document.getElementById('generateBarcodeModal');
	const showBarcodeDiv = document.getElementById('showBarcode');

	generateBarcodeDiv.style.display = 'none';
	showBarcodeDiv.style.display = 'none';
};

const generateBarcode = () => {
	console.log('generateBarcode');

	const generateBarcodeDiv = document.getElementById('showBarcode');

	generateBarcodeDiv.style.display = 'flex';
};
