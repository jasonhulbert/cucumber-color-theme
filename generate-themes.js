const fs = require("fs");
const path = require("path");

const Mode = {
  Dark: "dark",
  Light: "light",
};

const configs = [
  {
    name: "Cucumber",
    mode: Mode.Dark,
    variant: "Dark",
    colors: {
      accent: "#22796c",
      accentBackground: "#0e483f",
      background: "#1c2121",
      foreground: "#d7d7d7",
      brightBackground: "#000000",
      brightForeground: "#ffffff",
      border: "#242a2a",
      editorBackground: "#141a1a",
      editorForeground: "#b3c2bf",
      inactive: "#676e6b",
      theme1: "#2ebab8",
      theme2: "#e2c08d",
      theme3: "#40a6ff",
      theme4: "#dd9482",
      theme5: "#788af2",
      theme6: "#3dacc2",
      theme7: "#e2e3b3",
      theme8: "#47bbff",
      theme9: "#9cd5d5",
      theme10: "#44c0d6",
      theme11: "#9b7ee4",
      theme12: "#84d7ba",
      theme13: "#c05959",
      theme14: "#22b479",
      theme15: "#898482",
    },
  },
  {
    name: "Cucumber",
    mode: Mode.Light,
    variant: "Light",
    colors: {
      accent: "#22796c",
      accentBackground: "#aad7d0",
      background: "#edebe7",
      foreground: "#3f3f3f",
      brightBackground: "#ffffff",
      brightForeground: "#000000",
      border: "#d1cfcb",
      editorBackground: "#faf8f4",
      editorForeground: "#323131",
      inactive: "#989f9c",
      theme1: "#038177",
      theme2: "#88560a",
      theme3: "#0865b6",
      theme4: "#943d25",
      theme5: "#534af3",
      theme6: "#0d4753",
      theme7: "#656707",
      theme8: "#006b95",
      theme9: "#265e6a",
      theme10: "#506db0",
      theme11: "#3d1e8c",
      theme12: "#236854",
      theme13: "#ad4d4d",
      theme14: "#1da06b",
      theme15: "#615c5a",
    },
  },
];

function generateThemes(config) {
  const theme = {
    name: `${config.name} - ${config.variant}`,
    colors: {
      "actionBar.toggledBackground": config.colors.border,
      "activityBar.activeBorder": config.colors.accent,
      "activityBar.background": config.colors.background,
      "activityBar.border": config.colors.border,
      "activityBar.foreground": config.colors.foreground,
      "activityBar.inactiveForeground": config.colors.inactive,
      "activityBarBadge.background": config.colors.accent,
      "activityBarBadge.foreground":
        config.mode === Mode.Dark
          ? config.colors.brightForeground
          : config.colors.brightBackground,
      "badge.background": config.colors.theme15,
      "badge.foreground":
        config.mode === Mode.Dark
          ? config.colors.brightForeground
          : config.colors.brightBackground,
      "button.background": config.colors.accent,
      "button.border": config.colors.border,
      "button.foreground":
        config.mode === Mode.Dark
          ? config.colors.brightForeground
          : config.colors.brightBackground,
      "button.hoverBackground": config.colors.accentBackground,
      "button.secondaryBackground": config.colors.theme15,
      "button.secondaryForeground":
        config.mode === Mode.Dark
          ? config.colors.brightForeground
          : config.colors.brightBackground,
      "button.secondaryHoverBackground": config.colors.border,
      "chat.editedFileForeground": config.colors.theme2,
      "chat.slashCommandForeground": config.colors.theme3,
      "checkbox.background": config.colors.editorBackground,
      "checkbox.border": config.colors.border,
      "debugToolBar.background": config.colors.background,
      descriptionForeground: config.colors.theme15,
      "diffEditor.insertedLineBackground": `${config.colors.theme14}20`,
      "diffEditor.insertedTextBackground": `${config.colors.theme14}40`,
      "diffEditor.removedLineBackground": `${config.colors.theme13}20`,
      "diffEditor.removedTextBackground": `${config.colors.theme13}40`,
      "diffEditorGutter.insertedLineBackground": `${config.colors.theme14}20`,
      "diffEditorGutter.removedLineBackground": `${config.colors.theme13}20`,
      "diffEditor.border": config.colors.border,
      "dropdown.background": config.colors.editorBackground,
      "dropdown.border": config.colors.border,
      "dropdown.foreground": config.colors.editorForeground,
      "dropdown.listBackground": config.colors.editorBackground,
      "editor.background": config.colors.editorBackground,
      "editor.findMatchBackground": `${config.colors.theme7}60`,
      "editor.foreground": config.colors.editorForeground,
      "editor.inactiveSelectionBackground": `${config.colors.accent}60`,
      "editor.selectionHighlightBackground": `${config.colors.accent}80`,
      "editorGroup.border": config.colors.border,
      "editorGroupHeader.tabsBackground": config.colors.background,
      "editorGroupHeader.tabsBorder": config.colors.border,
      "editorGutter.addedBackground": config.colors.theme1,
      "editorGutter.deletedBackground": config.colors.theme4,
      "editorGutter.modifiedBackground": config.colors.theme5,
      "editorIndentGuide.activeBackground1": `${config.colors.inactive}80`,
      "editorIndentGuide.background1": `${config.colors.inactive}40`,
      "editorLineNumber.activeForeground": config.colors.editorForeground,
      "editorLineNumber.foreground": config.colors.inactive,
      "editorOverviewRuler.border": config.colors.border,
      "editorWidget.background": config.colors.background,
      errorForeground: config.colors.theme13,
      focusBorder: config.colors.accent,
      foreground: config.colors.editorForeground,
      "gitDecoration.modifiedResourceForeground": config.colors.theme5,
      "gitDecoration.stageModifiedResourceForeground": config.colors.theme5,
      "gitDecoration.deletedResourceForeground": config.colors.theme4,
      "gitDecoration.stageDeletedResourceForeground": config.colors.theme4,
      "gitDecoration.untrackedResourceForeground": config.colors.theme11,
      "gitDecoration.ignoredResourceForeground": config.colors.inactive,
      "gitDecoration.conflictingResourceForeground": config.colors.theme13,
      "gitDecoration.addedResourceForeground": config.colors.theme14,
      "gitDecoration.submoduleResourceForeground": config.colors.theme10,
      "icon.foreground": config.colors.editorForeground,
      "input.background": config.colors.editorBackground,
      "input.border": config.colors.border,
      "input.foreground": config.colors.editorForeground,
      "input.placeholderForeground": config.colors.inactive,
      "inputOption.activeBackground": config.colors.accentBackground,
      "inputOption.activeBorder": config.colors.accent,
      "keybindingLabel.foreground": config.colors.editorForeground,
      "list.activeSelectionIconForeground": config.colors.brightForeground,
      "list.activeSelectionBackground": config.colors.accentBackground,
      "list.inactiveSelectionBackground": `${config.colors.accentBackground}60`,
      "list.activeSelectionForeground": config.colors.brightForeground,
      "list.focusBackground": `${config.colors.accentBackground}60`,
      "list.hoverBackground": `${config.colors.accentBackground}60`,
      "list.focusForeground": config.colors.brightForeground,
      "list.highlightForeground": config.colors.theme5,
      "list.dropBackground": config.colors.border,
      "menu.background": config.colors.editorBackground,
      "menu.border": config.colors.border,
      "menu.foreground": config.colors.editorForeground,
      "menu.selectionBackground": config.colors.accent,
      "menu.separatorBackground": config.colors.border,
      "notificationCenterHeader.background": config.colors.editorBackground,
      "notificationCenterHeader.foreground": config.colors.editorForeground,
      "notifications.background": config.colors.editorBackground,
      "notifications.border": config.colors.border,
      "notifications.foreground": config.colors.editorForeground,
      "panel.background": config.colors.background,
      "panel.border": config.colors.border,
      "panelInput.border": config.colors.border,
      "panelTitle.activeBorder": config.colors.accent,
      "panelTitle.activeForeground": config.colors.editorForeground,
      "panelTitle.inactiveForeground": config.colors.inactive,
      "peekViewEditor.background": config.colors.editorBackground,
      "peekViewEditor.matchHighlightBackground": `${config.colors.theme7}60`,
      "peekViewResult.background": config.colors.editorBackground,
      "peekViewResult.matchHighlightBackground": `${config.colors.theme7}60`,
      "pickerGroup.border": config.colors.border,
      "ports.iconRunningProcessForeground": config.colors.theme14,
      "progressBar.background": config.colors.accent,
      "quickInput.background": config.colors.editorBackground,
      "quickInput.foreground": config.colors.editorForeground,
      "settings.dropdownBackground": config.colors.editorBackground,
      "settings.dropdownBorder": config.colors.border,
      "settings.headerForeground": config.colors.brightForeground,
      "settings.modifiedItemIndicator": config.colors.accentBackground,
      "sideBar.background": config.colors.background,
      "sideBar.border": config.colors.border,
      "sideBar.foreground": config.colors.editorForeground,
      "sideBarSectionHeader.background": config.colors.background,
      "sideBarSectionHeader.border": config.colors.border,
      "sideBarSectionHeader.foreground": config.colors.editorForeground,
      "sideBarTitle.foreground": config.colors.editorForeground,
      "statusBar.background": config.colors.background,
      "statusBar.border": config.colors.border,
      "statusBar.debuggingBackground": config.colors.accent,
      "statusBar.debuggingForeground":
        config.mode === Mode.Dark
          ? config.colors.brightForeground
          : config.colors.brightBackground,
      "statusBar.focusBorder": config.colors.accent,
      "statusBar.foreground": config.colors.foreground,
      "statusBar.noFolderBackground": config.colors.border,
      "statusBarItem.focusBorder": config.colors.accent,
      "statusBarItem.prominentBackground": config.colors.accentBackground,
      "statusBarItem.remoteBackground": config.colors.accent,
      "statusBarItem.remoteForeground":
        config.mode === Mode.Dark
          ? config.colors.brightForeground
          : config.colors.brightBackground,
      "tab.activeBackground": config.colors.editorBackground,
      "tab.activeBorder": config.colors.editorBackground,
      "tab.activeBorderTop": config.colors.accent,
      "tab.activeForeground": config.colors.brightForeground,
      "tab.border": config.colors.border,
      "tab.hoverBackground": config.colors.editorBackground,
      "tab.inactiveBackground": config.colors.background,
      "tab.inactiveForeground": config.colors.inactive,
      "tab.lastPinnedBorder": config.colors.border,
      "tab.selectedBackground": config.colors.editorBackground,
      "tab.selectedBorderTop": config.colors.accent,
      "tab.selectedForeground": config.colors.brightForeground,
      "tab.unfocusedActiveBorder": config.colors.editorBackground,
      "tab.unfocusedActiveBorderTop": config.colors.border,
      "tab.unfocusedHoverBackground": config.colors.editorBackground,
      "terminal.background": config.colors.editorBackground,
      "terminal.foreground": config.colors.editorForeground,
      "terminal.selectionBackground": `${config.colors.accent}80`,
      "terminal.inactiveSelectionBackground": `${config.colors.accent}60`,
      "terminal.tab.activeBorder": config.colors.accent,
      "terminal.ansiBrightBlack": config.colors.brightBackground,
      "terminal.ansiBrightBlue": config.colors.theme3,
      "terminal.ansiBrightCyan": config.colors.theme8,
      "terminal.ansiBrightGreen": config.colors.theme1,
      "terminal.ansiBrightMagenta": config.colors.theme5,
      "terminal.ansiBrightRed": config.colors.theme4,
      "terminal.ansiBrightWhite": config.colors.brightForeground,
      "terminal.ansiBrightYellow": config.colors.theme7,
      "terminal.ansiBlack": config.colors.brightBackground,
      "terminal.ansiBlue": config.colors.theme3,
      "terminal.ansiCyan": config.colors.theme8,
      "terminal.ansiGreen": config.colors.theme1,
      "terminal.ansiMagenta": config.colors.theme5,
      "terminal.ansiRed": config.colors.theme4,
      "terminal.ansiWhite": config.colors.editorForeground,
      "terminal.ansiYellow": config.colors.theme7,
      "textBlockQuote.background": config.colors.border,
      "textBlockQuote.border": config.colors.accent,
      "textCodeBlock.background": config.colors.background,
      "textLink.activeForeground": config.colors.accent,
      "textLink.foreground": config.colors.accent,
      "textPreformat.background": config.colors.background,
      "textPreformat.foreground": config.colors.foreground,
      "textSeparator.foreground": config.colors.border,
      "titleBar.activeBackground": config.colors.background,
      "titleBar.activeForeground": config.colors.editorForeground,
      "titleBar.border": config.colors.border,
      "titleBar.inactiveBackground": config.colors.editorBackground,
      "titleBar.inactiveForeground": config.colors.inactive,
      "welcomePage.progress.foreground": config.colors.accent,
      "welcomePage.tileBackground": config.colors.border,
      "widget.border": config.colors.border,
    },
    tokenColors: [
      {
        scope: ["meta.brace", "meta.punctuation"],
        settings: {
          foreground: config.colors.editorForeground,
        },
      },
      {
        scope: "comment",
        settings: {
          fontStyle: "italic",
          foreground: config.colors.inactive,
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: config.colors.theme8,
        },
      },
      {
        scope: "entity.name.operator",
        settings: {
          foreground: config.colors.theme6,
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: config.colors.theme9,
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: config.colors.theme8,
        },
      },
      {
        scope: [
          "variable.other.readonly",
          "variable.other.readonly.property",
          "variable.other.constant",
          "variable.other.constant.property",
          "variable.other.object",
          "variable.other.object.property",
          "entity.name.enum",
          "entity.name.enum.member",
        ],
        settings: {
          foreground: config.colors.theme10,
        },
      },
      {
        scope: "constant",
        settings: {
          foreground: config.colors.theme4,
        },
      },
      {
        scope: "storage",
        settings: {
          foreground: config.colors.theme11,
        },
      },
      {
        scope: "string",
        settings: {
          foreground: config.colors.theme7,
        },
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: config.colors.theme4,
        },
      },
      {
        scope: [
          "meta.punctuation.template-expression",
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
        ],
        settings: {
          foreground: config.colors.theme4,
        },
      },
      {
        scope: [
          "entity.name.tag",
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag.end",
        ],
        settings: {
          foreground: config.colors.theme8,
        },
      },
      {
        scope: [
          "entity.other.attribute-name",
          "entity.other.attribute-name.class.css",
          "source.css entity.other.attribute-name.class",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.pseudo-element.css",
          "entity.other.attribute-name.scss",
          "source.css entity.other.attribute-name.pseudo-class",
        ],
        settings: {
          foreground: config.colors.theme1,
        },
      },
      {
        scope: ["support.type", "entity.name.type", "entity.other.attribute"],
        settings: {
          foreground: config.colors.theme1,
        },
      },
      {
        scope: [
          "support.class",
          "entity.name.type.class",
          "entity.name.namespace",
          "entity.name.scope-resolution",
          "entity.name.class",
        ],
        settings: {
          foreground: config.colors.theme1,
        },
      },
      {
        scope: [
          "meta.type.cast.expr",
          "meta.type.new.expr",
          "entity.other.inherited-class",
        ],
        settings: {
          foreground: config.colors.theme1,
        },
      },
      {
        scope: ["meta.object-literal.key"],
        settings: {
          foreground: config.colors.theme9,
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: config.colors.theme12,
        },
      },
      {
        scope: ["punctuation.decorator"],
        settings: {
          foreground: config.colors.theme12,
        },
      },
      {
        scope: "meta.paragraph.markdown",
        settings: {
          foreground: config.colors.theme7,
        },
      },
      {
        scope: "markup.heading.markdown",
        settings: {
          foreground: config.colors.theme1,
        },
      },
      {
        scope: "markup.underline.link",
        settings: {
          foreground: config.colors.theme8,
        },
      },
      {
        scope: [
          "punctuation.definition.link.title.begin.markdown",
          "punctuation.definition.link.title.end.markdown",
          "punctuation.definition.list.begin.markdown",
          "punctuation.definition.list.end.markdown",
          "punctuation.definition.metadata.markdown",
        ],
        settings: {
          foreground: config.colors.theme10,
        },
      },
      {
        scope: "punctuation.definition.heading.markdown",
        settings: {
          foreground: config.colors.theme1,
          fontStyle: "bold",
        },
      },
      {
        scope: "markup.bold.markdown",
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: "markup.italic.markdown",
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "markup.inline.raw.string.markdown",
          "markup.fenced_code.block.markdown",
        ],
        settings: {
          foreground: config.colors.editorForeground,
        },
      },
    ],
  };

  const outputPath = path.join(
    __dirname,
    `./themes/Cucumber-${config.variant}_color-theme.json`
  );
  fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2), {
    mode: "0755",
  });
  console.log(`Theme file generated: ${outputPath}`);
}

for (const config of configs) {
  generateThemes(config);
}
