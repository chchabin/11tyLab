USE [autoecole]
GO
/****** Object:  Table [dbo].[eleve]    Script Date: 27/10/2023 20:35:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[eleve](
	[id] [int] NOT NULL,
	[nom] [varchar](20) NULL,
	[dateInscription] [date] NULL,
	[prenom] [varchar](20) NULL,
	[adresse] [varchar](30) NULL,
	[creditHoraire] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lecon]    Script Date: 27/10/2023 20:35:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lecon](
	[id] [int] NOT NULL,
	[date] [date] NOT NULL,
	[idEleve] [int] NULL,
	[heure] [int] NULL,
	[duree] [int] NULL,
	[effectueeOui_Non] [smallint] NOT NULL,
	[numImmaVehicule] [varchar](8) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[vehicule]    Script Date: 27/10/2023 20:35:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[vehicule](
	[numImma] [varchar](8) NOT NULL,
	[modele] [varchar](20) NULL,
	[couleur] [varchar](30) NULL,
	[enEtat] [smallint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[numImma] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[eleve] ([id], [nom], [dateInscription], [prenom], [adresse], [creditHoraire]) VALUES (12, N'Trépert', CAST(N'2014-05-11' AS Date), N'Annietyt', N'93600 Aulnay', 17)
INSERT [dbo].[eleve] ([id], [nom], [dateInscription], [prenom], [adresse], [creditHoraire]) VALUES (21, N'Pirounet', CAST(N'2014-03-10' AS Date), N'France', N'93600 Aulnay', 19)
INSERT [dbo].[eleve] ([id], [nom], [dateInscription], [prenom], [adresse], [creditHoraire]) VALUES (23, N'Trépert', CAST(N'2014-01-15' AS Date), N'Marc', N'93100 Montreuil', 4)
INSERT [dbo].[eleve] ([id], [nom], [dateInscription], [prenom], [adresse], [creditHoraire]) VALUES (36, N'Gamzi', CAST(N'2014-06-21' AS Date), N'Christophe', N'93100 Montreuil', 18)
INSERT [dbo].[eleve] ([id], [nom], [dateInscription], [prenom], [adresse], [creditHoraire]) VALUES (37, N'Chaballe', CAST(N'2014-05-09' AS Date), N'Marc', N'21 rue Bareau 93100 Montreuil', 30)
INSERT [dbo].[eleve] ([id], [nom], [dateInscription], [prenom], [adresse], [creditHoraire]) VALUES (45, N'Poireau', CAST(N'2014-08-19' AS Date), N'Gilles', N'93000 Bobigny', 18)
INSERT [dbo].[eleve] ([id], [nom], [dateInscription], [prenom], [adresse], [creditHoraire]) VALUES (46, N'Ardi', CAST(N'2014-01-14' AS Date), N'Jean', N'45 rue Petit 75019', 30)
GO
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (1021, CAST(N'2014-09-11' AS Date), 12, 12, 1, 1, N'1123YA93')
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (1435, CAST(N'2014-05-09' AS Date), 23, 12, 1, 1, N'1123YA93')
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (1512, CAST(N'2014-09-14' AS Date), 23, 19, 2, 1, N'129ABA93')
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (2125, CAST(N'2014-09-12' AS Date), 12, 17, 1, 1, N'1123YA93')
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (2239, CAST(N'2014-05-09' AS Date), 36, 18, 1, 1, N'4561WK93')
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (2777, CAST(N'2014-09-14' AS Date), 23, 16, 1, 1, N'129ABA93')
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (2834, CAST(N'2014-05-09' AS Date), 12, 12, 1, 1, N'1123YA93')
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (3397, CAST(N'2014-05-09' AS Date), 23, 11, 1, 1, N'7891WJ93')
INSERT [dbo].[lecon] ([id], [date], [idEleve], [heure], [duree], [effectueeOui_Non], [numImmaVehicule]) VALUES (3562, CAST(N'2014-05-09' AS Date), 45, 15, 2, 1, N'7891WJ93')
GO
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'1123YA93', N'Twingo', N'rouge', 1)
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'1235YB93', N'Twingo', N'blanche', 1)
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'129ABA93', N'Laguna', N'blanche', 1)
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'1745ZE93', N'Mégane', N'Noire', 1)
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'1845TY93', N'Mégane', N'Verte', 0)
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'2289DR93', N'Peugeot 204', N'Blanche', 1)
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'4561WK93', N'Twingo', N'beige', 1)
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'457ABC93', N'Clio', N'bleue', 1)
INSERT [dbo].[vehicule] ([numImma], [modele], [couleur], [enEtat]) VALUES (N'7891WJ93', N'Clio', N'noire', 1)
GO
ALTER TABLE [dbo].[eleve] ADD  DEFAULT (NULL) FOR [nom]
GO
ALTER TABLE [dbo].[eleve] ADD  DEFAULT (NULL) FOR [dateInscription]
GO
ALTER TABLE [dbo].[eleve] ADD  DEFAULT (NULL) FOR [prenom]
GO
ALTER TABLE [dbo].[eleve] ADD  DEFAULT (NULL) FOR [adresse]
GO
ALTER TABLE [dbo].[eleve] ADD  DEFAULT (NULL) FOR [creditHoraire]
GO
ALTER TABLE [dbo].[lecon] ADD  DEFAULT (NULL) FOR [idEleve]
GO
ALTER TABLE [dbo].[lecon] ADD  DEFAULT (NULL) FOR [heure]
GO
ALTER TABLE [dbo].[lecon] ADD  DEFAULT (NULL) FOR [duree]
GO
ALTER TABLE [dbo].[lecon] ADD  DEFAULT (NULL) FOR [numImmaVehicule]
GO
ALTER TABLE [dbo].[vehicule] ADD  DEFAULT (NULL) FOR [modele]
GO
ALTER TABLE [dbo].[vehicule] ADD  DEFAULT (NULL) FOR [couleur]
GO
ALTER TABLE [dbo].[eleve]  WITH CHECK ADD  CONSTRAINT [FK_eleve_eleve] FOREIGN KEY([id])
REFERENCES [dbo].[eleve] ([id])
GO
ALTER TABLE [dbo].[eleve] CHECK CONSTRAINT [FK_eleve_eleve]
GO
ALTER TABLE [dbo].[lecon]  WITH CHECK ADD  CONSTRAINT [lecon_ibfk_1] FOREIGN KEY([numImmaVehicule])
REFERENCES [dbo].[vehicule] ([numImma])
GO
ALTER TABLE [dbo].[lecon] CHECK CONSTRAINT [lecon_ibfk_1]
GO
ALTER TABLE [dbo].[lecon]  WITH CHECK ADD  CONSTRAINT [lecon_ibfk_2] FOREIGN KEY([idEleve])
REFERENCES [dbo].[eleve] ([id])
GO
ALTER TABLE [dbo].[lecon] CHECK CONSTRAINT [lecon_ibfk_2]
GO
