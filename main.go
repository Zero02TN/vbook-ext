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
	fmt.Fprintln(mdFile, "Tải app tại : [Vbook App Download](https://github.com/miru-project/miru-app)\n")
	fmt.Fprintln(mdFile, "## Link extension:\n")
	fmt.Fprintln(mdFile, "https://raw.githubusercontent.com/nhocconsr/vbook-ext/master/plugin.json\n\n")
	fmt.Fprintln(mdFile, "##List\n")
	fmt.Fprintln(mdFile, "| Name | Source | Version | Author | Lang | Type |")
	fmt.Fprintln(mdFile, "|------|--------|---------|--------|------|------|")

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

	if err != nil {
		panic(err)
	}

	fmt.Println("Markdown file created successfully.")
}
