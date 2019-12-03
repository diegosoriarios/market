import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';

class Barcode extends StatefulWidget {
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<Barcode> {

  String _scanBarcode = "Unknown";

  @override
  void initState() {
    super.initState();
  }

  startBarcodeScanStream() async {
    FlutterBarcodeScanner.getBarcodeStreamReceiver(
      "#ff6666", "Cancel", true, ScanMode.BARCODE)
      .listen((barcode) => print(barcode));
  }

  Future<void> scanBarcodeNormal() async {
    String barcodeScansRes;

    try {
      barcodeScansRes = await FlutterBarcodeScanner.scanBarcode("#ff6666", "Cancel", true, ScanMode.BARCODE);

      print(barcodeScansRes);
    } on PlatformException {
      barcodeScansRes = "Failed to get platform version.";
    }

    if (!mounted) return;

    setState(() {
      _scanBarcode = barcodeScansRes;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Builder(builder: (BuildContext context) {
      return Container(
        alignment: Alignment.center,
        child: Flex(
          direction: Axis.vertical,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              onPressed: () => scanBarcodeNormal(),
              child: Text("Start barcode scan")
            ),
            RaisedButton(
              onPressed: () => startBarcodeScanStream(),
              child: Text("Start barcode scan stream")),
            Text('Scan result : $_scanBarcode\n', style: TextStyle(fontSize: 20))
          ],
        )
      );
    });
  }
}