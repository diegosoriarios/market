import 'package:flutter/material.dart';
import 'package:market/pages/QRCode.dart';
import 'package:market/pages/Barcode.dart';
import 'package:market/pages/MainTab.dart';

void main() {
  runApp(MaterialApp(
    title: "Using tabs",
    home: MyHome()
  ));
}

class MyHome extends StatefulWidget {
  @override
  MyHomeState createState() => MyHomeState();
}

class MyHomeState extends State<MyHome> with SingleTickerProviderStateMixin {
  TabController controller;

  @override
  void initState() {
    super.initState();

    controller = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Using Bottom Navigation Bar"),
        backgroundColor: Colors.blue,
      ),
      body: TabBarView(
        children: <Widget>[MainTab(), Barcode(), QRCode()],
        controller: controller,
      ),
      bottomNavigationBar: Material(
        color: Colors.blue,
        child: TabBar(
          tabs: <Tab>[
            Tab(
              icon: Icon(Icons.camera_alt),
            ),
            Tab(
              icon: Icon(Icons.adb),
            ),
            Tab(
              icon: Icon(Icons.airport_shuttle),
            )
          ],
          controller: controller,
        ),
      ),
    );
  }
}