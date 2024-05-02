package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
)

// Metadata represents the metadata section of plugin.json
type Metadata struct {
	Name    string `json:"name"`
	Version int    `json:"version"`
	Source  string `json:"source"`
	Lang    string `json:"locale"`
	Type    string `json:"type"`
}

// Plugin represents the structure of plugin.json
type Plugin struct {
	Metadata Metadata `json:"metadata"`
}

func main() {
	// Define the directory containing the subdirectories
	root := "F:\\Coding\\vbook-ext" // Replace with your directory path

	// Create a markdown file
	mdFile, err := os.Create("README.md")
	if err != nil {
		panic(err)
	}
	defer mdFile.Close()

	// Write the table header to the markdown file
	fmt.Fprintln(mdFile, "## Vbook Extensions\n")
	fmt.Fprintln(mdFile, "Extensions cho app Vbook App.\n\n")
	fmt.Fprintln(mdFile, "Tải app tại : [Vbook App Download](https://bit.ly/vbookapp)\n")
	fmt.Fprintln(mdFile, "## Link extension\n")
	fmt.Fprintln(mdFile, "https://raw.githubusercontent.com/nhocconsr/vbook-ext/master/plugin.json\n\n")
	fmt.Fprintln(mdFile, "##List\n")
	fmt.Fprintln(mdFile, "| Name | Source | Version | Lang |")
	fmt.Fprintln(mdFile, "|------|--------|---------|------|")

	// Walk through the subdirectories
	err = filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// Check if it's a plugin.json file
		if filepath.Base(path) == "plugin.json" {
			// Read the json file
			jsonFile, err := ioutil.ReadFile(path)
			if err != nil {
				return err
			}

			// Unmarshal the json content into Plugin struct
			var plugin Plugin
			err = json.Unmarshal(jsonFile, &plugin)
			if err != nil {
				return err
			}

			// Write the plugin information to the markdown file
			// fmt.Fprintf(mdFile, "## %s\n", plugin.Metadata.Name)
			// fmt.Fprintf(mdFile, "- **Author**: %s\n", plugin.Metadata.Author)
			// fmt.Fprintf(mdFile, "- **Version**: %d\n", plugin.Metadata.Version)
			// fmt.Fprintf(mdFile, "- **Source**: %s\n", plugin.Metadata.Source)
			// fmt.Fprintf(mdFile, "- **Description**: %s\n\n", plugin.Metadata.Description)
			fmt.Fprintf(mdFile, "| %s | %s | %d | %s | %s |\n", plugin.Metadata.Name, plugin.Metadata.Source, plugin.Metadata.Version, plugin.Metadata.Lang, plugin.Metadata.Type)
		}

		return nil
	})
	fmt.Fprintln(mdFile, "## Hướng dẫn cài đặt\n")
	fmt.Fprintln(mdFile, "| 1.Mở phần mở rộng trong app                   | 2.Lựa chọn quản lý Extension URL        |")
	fmt.Fprintln(mdFile, "| --------------------------------------------- | --------------------------------------- |")
	fmt.Fprintln(mdFile, "| <img src='huongdan/extension.jpg' width='500'>| <img src='huongdan/add.jpg' width='500'>|")
	fmt.Fprintln(mdFile, "* Sau đó nhập link:\n")
	fmt.Fprintln(mdFile, "```\nhttps://raw.githubusercontent.com/nhocconsr/vbook-ext/master/plugin.json\n```")
	fmt.Fprintln(mdFile, "![alt](huongdan/adds.jpg)\n")

	if err != nil {
		panic(err)
	}

	fmt.Println("Markdown file created successfully.")
}
